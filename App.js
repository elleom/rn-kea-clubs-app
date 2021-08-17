import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import {Provider} from "react-redux";
import ChatReducer from "./store/reducers/ChatReducer";
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import ReduxThunk from "redux-thunk";
import auth from '@react-native-firebase/auth';
import {LogBox} from 'react-native';
import EventsReducer from "./store/reducers/EventsReducer";
import MainNavigator from "./navigation/MainNavigator";
import AuthReducer from "./store/reducers/AuthReducer";

LogBox.ignoreLogs(['Setting a timer']);


const fetchFont = () => {
    return (
        Font.loadAsync(
            {
                'oxanium-regular': require('./assets/fonts/Oxanium-Regular.ttf'),
                'oxanium-light': require('./assets/fonts/Oxanium-Light.ttf'),
                'oxanium-bold': require('./assets/fonts/Oxanium-Bold.ttf'),
            }
        )
    )
}

const rootReducer = combineReducers({
    chat: ChatReducer,
    events: EventsReducer,
    auth: AuthReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


function LoginApp() {
    //set initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(); //no given default state

//user state changer
    const onAuthStateChangeHandler = user => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChangeHandler);
        return subscriber; //unsubscribe on unmount
    })

    if (initializing) return null;
    if (!user) {
        return (
            <View>
                <Text>Login</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>Welcome {user.email}</Text>
        </View>
    )
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFont}
                onFinish={() => setFontLoaded(true)}
                onError={(error) => console.log(error)}
            />)
    }

    return (

        <Provider store={store}>
            <MainNavigator/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



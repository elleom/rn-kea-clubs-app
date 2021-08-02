import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainNavigator from "./navigation/MainNavigator";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import FirstScreen from "./screens/FirstScreen";
import { Provider } from "react-redux";
import ChatReducer from "./store/reducers/ChatReducer";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import auth from '@react-native-firebase/auth';
import { LogBox } from 'react-native';

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
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


function LogginApp() {
    //set initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(); //no given default state

//user state changer
    const onAuthStateChangeHandler = user => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const suscriber = auth().onAuthStateChanged(onAuthStateChangeHandler);
        return suscriber; //unsubscribe on unmount
    })

    if (initializing) return null;
    if (!user){
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
      <FirstScreen />
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



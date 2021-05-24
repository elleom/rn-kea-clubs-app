import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainNavigator from "./navigation/MainNavigator";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";


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

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import ChatReducer from "./store/reducers/ChatReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  chat: ChatReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


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
        <MainNavigator />
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



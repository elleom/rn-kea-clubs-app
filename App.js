import React from "react";
import MainNavigator from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import ChatReducer from "./store/reducers/ChatReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";
//import { getFirebase } from "react-redux-firebase";
//import { reactReduxFirebase } from "react-redux-firebase";

//import { firebase } from "./firebase/firebaseConfig";
import "firebase/firestore";
import "firebase/database";

const rootReducer = combineReducers({
  chat: ChatReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

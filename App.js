
import React from 'react';
import MainNavigator from "./navigation/MainNavigator";

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ChatReducer from './store/reducers/ChatReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import {firebase}  from "./firebase/firebaseConfig";
import 'firebase/firestore'
import 'firebase/database'


const rootReducer = combineReducers({
  chat: ChatReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


const chatRoomRef = firebase.database().ref("ChatRooms")

chatRoomRef.once('value').then(snapshot => {
  console.log(snapshot.val())
}).catch(error => {
  console.log(error)
}) 

const getMarker = async () => {

  
//const userRef = chatRoomRef.child("ZA1u4i9cTU3Dxtm3BczG")


}

/*
chatRoomRef.once('value').then(snapshot => {
  console.log(snapshot.val())
}).catch(error => {
  console.log(error)
}) 

chatRoomRef.get().then((doc) => {
  if (doc.exists) {
      console.log("Document data:", doc.data());
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
*/






export default function App() {
  return (
    <Provider store={store}>
    <MainNavigator />
    </Provider>
  );
}

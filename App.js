import React from "react";
import MainNavigator from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import ChatReducer from "./store/reducers/ChatReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";

import { firebase } from "./firebase/firebaseConfig";
import "firebase/firestore";
import "firebase/database";

const rootReducer = combineReducers({
  chat: ChatReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const chatRoomIdArray = [777554];
const chatRoomObjArray = [];



const getChatRooms = async () => {

  const chatRoomRef = firebase.database().ref("CBSDatabase/ObjChatRooms");

  return chatRoomRef
  .once("value", async() => {

    

  })
  
  .then((snapshot) => {
    return  {data: snapshot.val()} 
  })
  .catch((error) => {
    console.log(error);
  });
} 

const obj =  await getChatRooms();

console.log(obj);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

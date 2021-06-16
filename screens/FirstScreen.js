import React, { useEffect } from "react";
import MainNavigator from "./../navigation/MainNavigator";

import { useDispatch } from "react-redux";
import { fetchChatRooms } from "./../store/ChatActions";

const FirstScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChatRooms());
        console.log("Hello")
        });


  return (
    <MainNavigator/>
        
  );
};


export default FirstScreen;

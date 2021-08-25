import React, { useEffect } from "react";
import MainNavigator from "./../navigation/MainNavigator";

//import { View, Button, StyleSheet, TextInput } from "react-native";

import { useDispatch } from "react-redux";
import { fetchChatRooms } from "./../store/ChatActions";
//import auth from "@react-native-firebase/auth";

const FirstScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatRooms());
    console.log("Hello");
  });

  

  /*
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
    */


  return (
    <MainNavigator />
  );
  

  /*

  
  const username = "junior@cbs.dk";
  const superSecretPassword = "test1996"
  
  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(username, superSecretPassword)
      .then(() => {
        //setUser(true);

        

        
        console.log("Your'e signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  if (!user) {
    <View>
      <TextInput
        onChangeText={(text) => onChangeUser(text)}
        value={value}
      />
      <TextInput
        onChangeText={(text) => onChangePassword(text)}
        value={value}
      />
      <Button title="Login" onPress={handleLogin}></Button>
    </View>
  }


  
  
  */
};


export default FirstScreen;

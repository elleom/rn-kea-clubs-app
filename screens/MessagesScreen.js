import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

//own imports
import ChatRoom from "./../components/ChatRoom";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

import { fetchChatRooms } from "./../store/ChatActions";

import { firebase } from "./../firebase/firebaseConfig";
import "firebase/firestore";
import "firebase/database";

const MessagesScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase
      .database()
      .ref("CBSDatabase/ObjChatRooms")
      .on("value", (snapshot) => {
        dispatch(fetchChatRooms(snapshot.val()));
      });
  });
  const chatroomsFirebase = useSelector(
    (state) => state.chat.firebaseChatrooms
  ); // selecting from redux store
  //const chatrooms = useSelector((state) => state.chat.chatrooms); // selecting from redux store

  console.log(chatroomsFirebase);

  //console.log("THIS IS redux store DATA:")
  //console.log(chatroomsFirebase)  <Button title="getchatrooms_console" onPress={handleSend}></Button>

  return (
    <View style={styles.container}>

      <FlatList
        data={chatroomsFirebase}
        renderItem={(itemData) => (
          <ChatRoom
            chatroom={itemData.item}
            navigation={props.navigation}
          ></ChatRoom>
        )}
        keyExtractor={(item) => item.id}
      />

      {/*
        <FlatList
        data={chatrooms}
        renderItem={(itemData) => (
          <ChatRoom
            chatroom={itemData.item}
            navigation={props.navigation}
          ></ChatRoom>
        )}
        keyExtractor={(item) => item.id}
      />
        */}
    </View>
  );
};

MessagesScreen.navigationOptions = (navData) => {
  return {
    headerStyle: {
      backgroundColor: Colors.accentColor,
    },
    headerTitle: "Messages",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Messages" iconName={"ios-menu"} onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessagesScreen;

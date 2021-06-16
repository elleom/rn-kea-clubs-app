import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

//own imports
import ChatRoom from "./../components/ChatRoom";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

import uuid from "uuid"



const MessagesScreen = (props) => {


 
  // selecting from redux store
  //const chatrooms = useSelector((state) => state.chat.chatrooms); // selecting from redux store


  const firebaseChatrooms = useSelector((state) => state.chat.firebaseChatrooms); // selecting from redux store
  const objChatrooms = firebaseChatrooms[0].chatrooms

  const chatrooms = Object.entries(objChatrooms).map(item => {
    
    return item;
    //console.log(item[1].name)
  })

  //console.log(firebaseChatrooms[0].chatrooms)
 /*
 const firebaseChatrooms = useSelector((state) => state.chat.firebaseChatrooms); // selecting from redux store
  console.log(firebaseChatrooms)
 */


  return (
    <View style={styles.container}>
        <FlatList
        
        data={chatrooms}
        renderItem={(itemData) => (
          <ChatRoom
            chatroom={itemData.item}
            navigation={props.navigation}
          ></ChatRoom>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
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

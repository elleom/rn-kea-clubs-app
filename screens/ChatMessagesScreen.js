import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToChats } from "./../store/ChatActions";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

//own imports
import Colors from "../constants/Colors";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ChatMessage from "../components/ChatMessage";

const ChatMessagesScreen = (props) => {
  const dispatch = useDispatch();

  const id = props.navigation.state.params.id;

  const [value, onChangeText] = useState("Write message");

  // Here I do some hacky maneuvers to extract the Messages data, since I did a poor data structure design
  //On the firebase real-time data base
  const objChatrooms = useSelector(
    (state) => state.chat.firebaseChatrooms[0].chatrooms
  );

  //Stringify and got some positions
  const strChatrooms = JSON.stringify(objChatrooms);
  const pos = strChatrooms.search('"' + id + '"') - 2;

  const firstExtractedChatroom = strChatrooms.substring(pos, strChatrooms.length-1);

  let strLastPos = 0;
  let extractedChatroom = "";

  if(firstExtractedChatroom.search('},"') === 0){

     strLastPos = firstExtractedChatroom.length;
     extractedChatroom = firstExtractedChatroom.substring(3, strLastPos);
  }else{
     strLastPos = firstExtractedChatroom.search('},"') + 1;
      extractedChatroom = firstExtractedChatroom.substring(pos, strLastPos);
    
  }
  
  
  //Extract the strings I need

  
  const newPos = extractedChatroom.search('":{') + 2;

  //Parse back to JSON!
  const jsonParseChatrooms = JSON.parse(
    extractedChatroom.substring(newPos, strLastPos)
  );

  //Now I have what I need

  const chatrooms = jsonParseChatrooms.chatMessages;


  const handleSend = () => {
    dispatch(addToChats(value, id, 'junior@cbs.dk'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.messages}>
        <FlatList
          data={chatrooms}
          renderItem={(itemData) => (
            <ChatMessage
              chatmessage={itemData.item}
              img={require("./../assets/ac99082f65d5c636e14e70785817899e.png")}
              
              ></ChatMessage>
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </View>

      <View style={styles.inputView}>
        <Image
          style={styles.tinyLogo}
          source={require("./../assets/6d38ab105ed32e0c25e4f82e1e9ccd2a.png")}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />

        <Button title="Send" onPress={handleSend}></Button>
      </View>
    </View>
  );
};

ChatMessagesScreen.navigationOptions = (navData) => {
  return {
    headerStyle: {
      backgroundColor: Colors.accentColor,
    },
    headerTitle: "ChatMessages",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Chat Messages" iconName={"ios-menu"} onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  messages: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: "lightgray",
    marginLeft: 10,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  inputView: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 5,
  },
  tinyLogo: {
    marginTop: -5,
  },
});

export default ChatMessagesScreen;

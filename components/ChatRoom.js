import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";



const ChatRoom = (props) => {

  //console.log("ChatRoom")
  //console.log(props)


  const lastPos = props.chatroom.chatMessages.length - 1;
  let lastMessageText = "";
  let displayTime = "";
  let photoUrl = props.chatroom.photoUrl.url;
  if (lastPos > -1) {
    lastMessageText =
      props.chatroom.chatMessages[props.chatroom.chatMessages.length - 1]
        .message;
    const lastTime =
      props.chatroom.chatMessages[props.chatroom.chatMessages.length - 1]
        .createdDate;

    // Should only do this if on the same date as today...
    displayTime = lastTime.getHours() + ":" + lastTime.getMinutes();
    
  }
  console.log(photoUrl)

  return (
    <TouchableOpacity
    onPress={() =>
        props.navigation.navigate('ChatMessages', {id:props.chatroom.id})
      }
    >
      <View style={styles.chatRoom}>
        <View style={styles.imageView}>
          <Image
            style={styles.tinyLogo}
            source={photoUrl}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{props.chatroom.name}</Text>
          <Text ellipsizeMode="tail" numberOfLines={1}>
            {lastMessageText}
          </Text>
        </View>
        <View style={styles.dotView}>
          <View style={styles.dot}></View>
          <Text>{displayTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ChatRoom.navigationOptions = (navData) => {
  return {
    headerStyle: {
      backgroundColor: Colors.accentColor,
    },
    headerTitle: "Chat Room",
  };
};

const styles = StyleSheet.create({
  chatRoom: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  textView: {
    paddingLeft: 5,
    paddingRight: 5,
    width: "80%",
  },
  message: {},
  text: {
    fontWeight: "bold",
  },
  dotView: {
    marginLeft: "auto",
  },
  imageView: {
    marginTop: -10,
    overflow:'hidden',
    borderRadius: 40
  },
  dot: {
    height: 12,
    width: 12,
    backgroundColor: "#5050A5",
    borderRadius: 100 / 2,

    // borderRadius: '50%',
    // display: 'inline-block'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default ChatRoom;

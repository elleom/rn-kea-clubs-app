import { firebase } from "./../firebaseConfig";
import "firebase/firestore";
import "firebase/database";

const getChatRooms = async () => {
  chatRoomIdArray = [8754655, 1234444];

  chatRoomIdArray.forEach((chatRoomId) => {
    const chatRoomRef = firebase.database().ref("CBSDatabase/ChatRooms");
    //.equalTo(chatRoomId);

    chatRoomRef
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val());
      })
      .catch((error) => {
        console.log(error);
      });
  });

  chatRoomIdArray.forEach((chatRoomId) => {
    const chatRoomRef = firebase
      .database()
      .ref("CBSDatabase/ChatRooms")
      .equalTo();
  });

  const userId = "felix@cbs.dk";
};

/**
         * 
         * 
         * array.forEach((element) => {
        if (element.chatRoomId === chatRoomId) {
          element.chatMessages.forEach((message) => {
            console.log(message);
          });
        }
      });
         */

/*

const chatRoomRef = firebase.database().ref("CBSDatabase/ChatRooms").equalTo();

  chatRoomRef
    .once("value")
    .then((snapshot) => {
      getArrayTest(snapshot.val());
    })
    .catch((error) => {
      console.log(error);
    });

  const getArrayTest = (array) => {
    chatRoomIdArray.forEach((chatRoomId) => {
      


        /**
         * 
         * 
         * array.forEach((element) => {
        if (element.chatRoomId === chatRoomId) {
          element.chatMessages.forEach((message) => {
            console.log(message);
          });
        }
      });
         */

export default getChatRooms;

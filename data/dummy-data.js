
import ChatMessage from "../models/ChatMessage";
import ChatRoom from "../models/ChatRoom";
import User from "../models/User";

export const USERS = [
    new User('1','Felix Sandgren', '1234', 'felix@sandgren.dk', '', 'MSc in Medicine', true),
    new User('2','Thomas Nielsen', '1234', 'felix2@sandgren.dk', '', 'MSc2 in Medicine', true)
];

export const CHATMESSAGES = [
    new ChatMessage('1',new Date(2021, 0, 1, 20, 10, 1), 'Hello anyone our there!', USERS[0]),
    new ChatMessage('2',new Date(2021, 0, 1, 20, 12, 1), 'Hello I am here', USERS[1]),
    new ChatMessage('3',new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0]),
    new ChatMessage('4',new Date(2021, 0, 1, 20, 15, 1), 'Hello looking at a React Native teacher right now..!', USERS[1]),
];

export const CHATMESSAGES2 = [
    new ChatMessage('1',new Date(2021, 0, 1, 20, 10, 1), 'Hello anyone our there!', USERS[0]),
    new ChatMessage('2',new Date(2021, 0, 1, 20, 12, 1), 'We have class tomorrow', USERS[1]),
    new ChatMessage('3',new Date(2021, 0, 1, 20, 14, 1), 'Hello you are right!', USERS[0]),
    new ChatMessage('4',new Date(2021, 0, 1, 20, 15, 1), 'Thanks!', USERS[1]),
];

export const CHATMESSAGES3 = [
    new ChatMessage('1',new Date(2021, 0, 1, 20, 10, 1), 'Poker night!', USERS[0]),
    new ChatMessage('2',new Date(2021, 0, 1, 20, 12, 1), 'I\'m down!', USERS[1]),
    new ChatMessage('3',new Date(2021, 0, 1, 20, 14, 1), 'Hello how are you!', USERS[0]),
    new ChatMessage('4',new Date(2021, 0, 1, 20, 15, 1), 'I\'m doing good thanks for asking', USERS[1]),
];

export const CHATROOM = [
    new ChatRoom('1',new Date(2021, 0, 1, 2, 0, 0), 'CBS Surf', CHATMESSAGES, {url : require("./../assets/ac99082f65d5c636e14e70785817899e.png")}),
    new ChatRoom('2',new Date(2021, 0, 1, 2, 1, 0), 'CBS Students', CHATMESSAGES2, {url : require("./../assets/kv_01.jpg")}),
    new ChatRoom('3',new Date(2021, 0, 1, 2, 2, 0), 'CBS Poker', CHATMESSAGES3, {url : require("./../assets/poker.jpg")})
];
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import {HeaderButtons, Item} from "react-navigation-header-buttons";

//own imports
import ChatRoom from './../components/ChatRoom'
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";



const MessagesScreen = props => {

    const chatrooms = useSelector(state => state.chat.chatrooms); // selecting from redux store


    return (
        
        <View style={styles.container}>
        
        <FlatList
            data={chatrooms}
            renderItem={itemData => (
                
                <ChatRoom chatroom={itemData.item} navigation={props.navigation}></ChatRoom>
                
            )}
            keyExtractor={item => item.id}
        />
        
      </View>
    )
}

MessagesScreen.navigationOptions = navData => {
    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        headerTitle: 'Messages',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Messages'
                iconName={'ios-menu'}
                onPress={() => {

                }}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   }

    }
)

export default MessagesScreen;
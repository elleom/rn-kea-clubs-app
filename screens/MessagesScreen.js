import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

const MessagesScreen = props => {
    return (
        <View style={styles.text}>
            <Text>
                This is the Messages screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 50,
        alignItems: 'center'
    }

    }
)

export default MessagesScreen;
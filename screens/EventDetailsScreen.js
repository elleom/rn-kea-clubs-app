import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Colors from "../constants/Colors";

const EventDetailsScreen = props => {
    return (
        <View style={styles.text}>
            <Text>
                This is the Event Details screen
            </Text>
        </View>
    )
}

EventDetailsScreen.navigationOptions = navData => {
    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        headerTitle: 'Event Details'
    }
}

const styles = StyleSheet.create({
        text: {
            marginTop: 50,
            alignItems: 'center'
        }
    }
)

export default EventDetailsScreen;

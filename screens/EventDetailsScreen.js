import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
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

import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import Colors from "../constants/Colors";
import {EVENTS} from "../data/dummy-data";

const EventDetailsScreen = props => {

    const eventId = props.navigation.getParam('eventId')
    const selectedEvent = EVENTS.find(event => event.id === eventId);


    return (
        <ScrollView>
            <Image source={{uri: selectedEvent.image}} style={styles.image}/>
            <View style={styles.main}>
                <View style={styles.text}>
                    <Text>
                        {selectedEvent.id}
                    </Text>
                    <Text>
                        {selectedEvent.image}
                    </Text>
                    <View style={styles.tinyLogo}>

                    </View>

                </View>
            </View>
        </ScrollView>

    )
}

EventDetailsScreen.navigationOptions = navData => {

    const eventName = navData.navigation.getParam('eventName');

    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        headerTitle: eventName,
    }
}

const styles = StyleSheet.create({
        image: {
            width: '100%',
            height: 200
        },
        text: {
            marginTop: 50,
            alignItems: 'center'
        },
        tinyLogo: {
            width: 100,
            height: 100,
        },
        main: {
            width: '100%',
        }
    }
)

export default EventDetailsScreen;

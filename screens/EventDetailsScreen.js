import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import Colors from "../constants/Colors";
import {EVENTS} from "../data/dummy-data";
import {Ionicons} from "@expo/vector-icons";

const EventDetailsScreen = props => {

    const eventId = props.navigation.getParam('eventId')
    const selectedEvent = EVENTS.find(event => event.id === eventId);


    return (
        <ScrollView>
            <Image source={{uri: selectedEvent.image}} style={styles.image}/>
            <View style={styles.main}>
                <View style={styles.text}>
                    <Text style={styles.title}>
                        {selectedEvent.title}
                    </Text>
                    <View style={styles.timeContainer}>
                        <Ionicons name="time" size={20} color="black"/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.detailsText}>{
                                selectedEvent.startDate.slice(0, 4)
                                + selectedEvent.startDate.slice(8, 10)
                                + selectedEvent.startDate.slice(15, 21)
                                + '\t\t\t-'}</Text>
                            <Text style={styles.detailsText}>{
                                selectedEvent.endDate.slice(0, 4)
                                + selectedEvent.endDate.slice(8, 10)
                                + selectedEvent.endDate.slice(15, 21)
                            }</Text>
                        </View>

                    </View>

                    <View style={styles.locationContainer}>
                        <Ionicons name="md-location-sharp" size={20} color="black"/>
                        <Text style={styles.detailsText}>{selectedEvent.location}</Text>
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
        locationContainer: {
            marginTop: 10,
            marginLeft: 15,
            flexDirection: 'row',

        },
        timeContainer: {
            marginLeft: 15,
            flexDirection: 'row',

        },
        detailsText: {
            fontFamily: 'oxanium-regular',
            color: 'black',
            fontSize: 18,
            marginLeft: 15
        },
        title: {
            fontFamily: 'oxanium-bold',
            color: 'black',
            fontSize: 28,
            marginLeft: 15,
            marginTop: 15,
            marginBottom: 15,

        },
        image: {
            width: '100%',
            height: 200
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

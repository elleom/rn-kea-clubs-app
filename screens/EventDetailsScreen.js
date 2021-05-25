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
                    <View style={styles.placeholderContainer}>
                        <Image style={styles.placeholder}
                               source={{uri: 'https://kea.dk/images/DA/Presse/Downloads/KEA_logo_DK_Web.jpg'}}/>
                        <View style={styles.clubTitleContainer}>
                            <Text style={styles.clubTitle}>{selectedEvent.organization}</Text>
                            <Text style={styles.clubSubTitle}>View Page</Text>
                        </View>

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
        placeholder: {
            width: 80,
            height: 40,
        },
        placeholderContainer: {
            margin: 15,
            padding: 5,
            flexDirection: 'row'
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
        clubTitle: {
            fontFamily: 'oxanium-bold',
            color: 'black',
            fontSize: 16,
        },
        clubSubTitle: {
            fontFamily: 'oxanium-bold',
            color: 'grey',
            fontSize: 14,
        },
        image: {
            width: '100%',
            height: 200
        },
        main: {
            width: '100%',
        },
        clubTitleContainer: {
            flexDirection: 'column',
            marginLeft: 10
        }
    }
)

export default EventDetailsScreen;

import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import Colors from "../constants/Colors";
import {EVENTS} from "../data/dummy-data";
import {Ionicons} from "@expo/vector-icons";
import OptionsMenu from "react-native-option-menu";

const EventDetailsScreen = props => {

    const eventId = props.navigation.getParam('eventId')
    const selectedEvent = EVENTS.find(event => event.id === eventId);
    const MoreIcon = require("../assets/icon.png");


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
                    <View style={styles.clubInfo}>
                        <TouchableOpacity style={styles.placeholderContainer}>
                            <Image style={styles.placeholder}
                                   source={{uri: 'https://kea.dk/images/DA/Presse/Downloads/KEA_logo_DK_Web.jpg'}}/>
                            <View style={styles.clubTitleContainer}>
                                <Text style={styles.clubTitle}>{selectedEvent.organization}</Text>
                                <Text style={styles.clubSubTitle}>View Page</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                        }}>
                            <Ionicons name="chatbubbles-outline" size={40} color={Colors.accentColor}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.optionsText}>INTERESTED</Text>
                        <OptionsMenu style={styles.options}
                                     button={MoreIcon}
                                     buttonStyle={{width: 32, height: 8, margin: 7.5, resizeMode: "contain"}}
                                     destructiveIndex={1}
                                     options={["Interested", "Going", 'Not Going', "Cancel"]}
                        />
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
            fontSize: 14,
        },
        clubSubTitle: {
            fontFamily: 'oxanium-bold',
            color: 'grey',
            fontSize: 12,
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
        },
        clubInfo: {
            margin: 15,
            padding: 10,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#8b8585',
            justifyContent: 'space-between'
        },
        optionsContainer: {
            marginLeft: 15,
            marginRight: 15,
            padding: 10,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#8b8585',
            justifyContent: 'space-between',
            backgroundColor: Colors.accentColor
        },
        options: {
            width: '100%',
            height: '100%',

        },
        optionsText: {
            fontFamily: 'oxanium-bold',
            color: 'white',
            fontSize: 16,
        }
    }
)

export default EventDetailsScreen;

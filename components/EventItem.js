import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {Ionicons} from "@expo/vector-icons";

const EventItem = props => {
    return (
        <View style={styles.eventItem}>
            <TouchableOpacity>
                <View >
                    <ImageBackground
                        source={{uri: props.image}}
                        style={styles.bgImage}>
                        <LinearGradient //insert veneer on top if image => left to right lighter to darker - opacity
                            colors={['rgba(0,0,0,0.05)', 'rgba(7,6,6,0.45)', 'rgba(0,0,0,0.76)']}
                            style={styles.linearGradient}/>
                        <View style={styles.container}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.organizationName}>{props.organization}</Text>
                            <View style={styles.locationContainer}>
                                <Ionicons name="md-location-sharp" size={20} color="white" />
                                <Text style={styles.detailsText}>{props.location}</Text>
                            </View>
                            <View style={styles.locationContainer}>
                                <Ionicons name="time" size={20} color="white" />
                                <Text style={styles.detailsText}>{props.startDate}</Text>
                            </View>
                        </View>


                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    eventItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 5,
    },
    locationContainer: {
        marginLeft: 10,
        flexDirection: 'row',

    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },
    title: {
        fontFamily: 'oxanium-bold',
        color: 'white',
        fontSize: 24,
        marginLeft: 10

    },
    detailsText: {
        fontFamily: 'oxanium-regular',
        color: 'white',
        fontSize: 14,
        marginLeft: 3
    },
    container: {
        marginBottom: 10,
    },
    organizationName: {
        marginLeft: 10,
        fontFamily: 'oxanium-regular',
        color: 'white',
        fontSize: 14,

    }


})


export default EventItem;
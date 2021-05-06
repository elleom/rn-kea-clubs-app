import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const EventItem = props => {
    return (
        <View style={styles.eventItem}>
            <TouchableOpacity>
                <View>
                    <LinearGradient style={styles.linearGradient} colors={['#a81010', '#FFFFFF']}>
                        <ImageBackground
                            source={{uri: props.image}}
                            style={styles.bgImage}>
                            <Text>{props.title}</Text>
                            <Text>{props.description}</Text>
                            <Text>{props.date}</Text>
                            <Text>{props.title}</Text>
                        </ImageBackground>
                    </LinearGradient>
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
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%'
        ,
        width: 350,
    }
})


export default EventItem;
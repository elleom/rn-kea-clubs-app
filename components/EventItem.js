import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const EventItem = props => {
    return (
        <View style={styles.eventItem}>
            <TouchableOpacity>
                <View>
                    <ImageBackground
                        source={{uri: props.image}}
                        style={styles.bgImage}>
                        <LinearGradient //insert veneer on top if image => left to right lighter to darker - opacity
                            colors={['rgba(0,0,0,0.05)', 'rgba(7,6,6,0.45)', 'rgba(0,0,0,0.76)']}
                            style={styles.linearGradient}/>
                        <Text>{props.title}</Text>
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
    }
})


export default EventItem;
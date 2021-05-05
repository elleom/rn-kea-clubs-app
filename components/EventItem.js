import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";

const EventItem = props => {
    return (
        <View style={styles.eventItem}>
            <TouchableOpacity>
                <View>
                    <ImageBackground
                        source={{uri: props.image}}
                        style={styles.bgImage}                    >
                        <Text>{props.title}</Text>
                        <Text>{props.description}</Text>
                        <Text>{props.date}</Text>
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
    }
})


export default EventItem;
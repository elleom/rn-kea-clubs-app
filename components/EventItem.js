import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";

const EventItem = props => {
    return (
        <TouchableOpacity>
            <View>
                <Text>props.title</Text>
                <Text>props.description</Text>
                <Text>props.date</Text>
                <Text>props.title</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({


})

export default EventItem;
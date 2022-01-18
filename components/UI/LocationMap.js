import React, {useState} from 'react';
import {Button, View} from 'react-native';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE} from "react-native-maps";
import Colors from "../../constants/Colors";
import {FontAwesome5, Ionicons} from "@expo/vector-icons";

const LocationMap = props => {


    const cphRegion = {
        latitude: 55.68106873656008,
        longitude: 12.562866210937502,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={cphRegion}
            />
            <View
                style={{
                    position: 'absolute',//use absolute position to show button on top of the map
                    top: '2%', //for center align
                    right: '2%',
                    alignSelf: 'flex-end' //for align to right
                }}
            >
                <FontAwesome5 name="plus-circle" size={40} color={Colors.accentColor}  onPress={() => {}}/>
                <FontAwesome5 name="minus-circle" size={40} color={Colors.accentColor} onPress={() => {}}/>
            </View>
        </View>
    )
}

export default LocationMap;

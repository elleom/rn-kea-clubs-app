import React from 'react';
import {View, Text, Button, StyleSheet, Platform, FlatList, TouchableOpacity} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import EventItem from "../components/EventItem";
import {EVENTS} from "../data/dummy-data";

const ClubsEventScreen = props => {

    const renderEventItem = eventItemData => {
        return (
            <EventItem
                title={eventItemData.item.title}
                description={eventItemData.item.description}
                date={eventItemData.item.date}
                onSelect={() => {
                }} //todo create navigate
            />
        )
    }

    return (
        <FlatList
            keyExtractor={(item => item.id)}
            data={EVENTS} renderItem={renderEventItem}/>
    )
}

ClubsEventScreen.navigationOptions = navData => {
    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        headerTitle: 'Events',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Clubs'
                iconName={'ios-menu'}
                onPress={() => {

                }}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
        text: {
            marginTop: 50,
            alignItems: 'center'
        }
    }
)

export default ClubsEventScreen;

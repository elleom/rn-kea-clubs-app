import React from 'react';
import {View, Text, Button, StyleSheet, Platform, FlatList} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import EventItem from "../components/EventItem";
import {EVENTS} from "../data/dummy-data";

const ClubsScreen = props => {

    const renderEventItem = eventItemData => {
        return (
            <EventItem
                title={eventItemData.item.title}
                description={eventItemData.item.description}
                date={eventItemData.item.date}
                image={eventItemData.item.image}
                onSelect={() => {
                    props.navigation.navigate('ClubEvent')
                }} //todo create navigate
            />
        )
    }


    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item => item.id)}
                data={EVENTS} keyExtractor={(item, index) => item.id}
                renderItem={renderEventItem}
                style={{width: '100%'}}
            />
        </View>
    )
}

ClubsScreen.navigationOptions = navData => {
    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        headerTitle: 'Club',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Clubs'
                iconName={'ios-menu'}
                onPress={() => {

                }}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15
        }
    }
)

export default ClubsScreen;

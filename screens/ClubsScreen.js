
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import EventItem from "../components/EventItem";
import {EVENTS} from "../data/dummy-data";
import {useSelector} from "react-redux";

const ClubsScreen = props => {
    const events = useSelector(state => state.events.availableEvents) // 'events' key from the store

    const renderEventItem = eventItemData => {
        return (
            <EventItem
                id={eventItemData.item.id}
                type={eventItemData.item.type}
                title={eventItemData.item.title}
                description={eventItemData.item.description}
                image={eventItemData.item.image}
                startDate={eventItemData.item.startDate}
                endDate={eventItemData.item.endDate}
                location={eventItemData.item.location}
                organization={eventItemData.item.organization}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'EventDetails',
                        params: {
                            eventId: eventItemData.item.id,
                            eventName: eventItemData.item.title
                        }
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item => item.id)}
                data={events}
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
        headerTitle: 'Events',

        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Clubs'
                iconName={'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
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

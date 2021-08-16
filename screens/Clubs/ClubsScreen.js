
import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator, Text, Button} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import Colors from "../../constants/Colors";
import EventItem from "../../components/EventItem";
import {EVENTS} from "../../data/dummy-data";
import {useDispatch, useSelector} from "react-redux";
import * as eventActions from '../../store/actions/EventsActions'

const ClubsScreen = props => {
    const events = useSelector(state => state.events.availableEvents) // 'events' key from the store
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState(); //undefined cause there no error

    const loadEvents = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(eventActions.fetchEvents())
        } catch (err) {
            console.error(err);
        }
        setIsRefreshing(false);
    }, [dispatch, setError, setIsLoading])

    /*fires when the component loads */
    useEffect(() => {
        setIsLoading(true);
        loadEvents().then(() => {
            setIsLoading(false);
        }); //returns a promise
    }, [dispatch, loadEvents]);

    const renderEventItem = eventItemData => {
        return (
            <EventItem
                id={eventItemData.item.id}
                type={eventItemData.item.type}
                title={eventItemData.item.title}
                description={eventItemData.item.description}
                imageUrl={eventItemData.item.imageUrl}
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

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>An error occurred!</Text>
                <Button
                    title="Try again"
                    onPress={loadEvents}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary}/>
            </View>
        );
    }

    if (!isLoading && events.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No products found. Maybe start adding some!</Text>
            </View>
        );
    }


    return (
        <View style={styles.screen}>
            <FlatList
                onRefresh={isLoading}
                refreshing={isRefreshing}
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

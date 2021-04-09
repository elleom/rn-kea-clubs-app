import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const ClubsEventScreen = props => {
    return (
        <View style={styles.text}>
            <Text>
                This is the Events screen
                <Button title="Event Details" onPress={() => {props.navigation.navigate({
                    routeName: 'EventDetails'
                })}}/>
            </Text>
        </View>
    )
}

ClubsEventScreen.navigationOptions = navData => {
    return {
        headerStyle: {
            backgroundColor: Colors.primaryColor
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

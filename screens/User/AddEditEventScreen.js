import React from 'react';
import {View, Text, Button, StyleSheet, Platform, FlatList, TouchableOpacity} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import Colors from "../../constants/Colors";
import {EVENTS} from "../../data/dummy-data";

const ClubsEventScreen = props => {
    return (
        <View>
            <Text>Here to edit</Text>
        </View>
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

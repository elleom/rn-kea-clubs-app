import React, { useEffect } from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const ClubsScreen = props => {


    return (
        <View style={styles.text}>
            <Text>
                This is the clubs screen
            </Text>
            <Button
                title="Events"
                onPress={ () => {
                    props.navigation.navigate('ClubEvent')}}/>
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
        text: {
            flexDirection: 'column',
            marginTop: 50,
            alignItems: 'center'
        }
    }
)

export default ClubsScreen;

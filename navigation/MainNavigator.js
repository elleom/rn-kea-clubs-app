import React from 'react';
import {Platform} from 'react-native'
import {SimpleLineIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";

//navigation imports
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createBottomTabNavigator} from 'react-navigation-tabs';


//screens
import ClubsScreen from '../screens/ClubsScreen'
import DiscoveryScreen from "../screens/DiscoveryScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MenuScreen from "../screens/MenuScreen";

import ClubEventsScreen from "../screens/User/UserEventsScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import ChatMessagesScreen from '../screens/ChatMessagesScreen';


//own imports
import Colors from "../constants/Colors";


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.accentColor : '' //if none described then default
    },
    headerTitleStyle: {}, headerBackTitleStyle: {},
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

}

const ClubsStackNavigator = createStackNavigator({
    Clubs: ClubsScreen, // short form, no option specifications
    EventDetails: EventDetailsScreen
}, {navigationOptions: {
        drawerIcon: drawerConfig =>
            <Ionicons
                name={'md-cart'}
                size={23}
                color={drawerConfig.tintColor}
            />
    },
    //points to the nav option stored above,
    defaultNavigationOptions: defaultStackNavOptions
});

const MessagesStackNavigator = createStackNavigator({
    Messages: MessagesScreen,
    ChatMessages: ChatMessagesScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Clubs: {
        screen: ClubsStackNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<SimpleLineIcons name='people' size={25} color={tabInfo.tintColor}/>)

            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: 'Clubs'
        }
    },
    Discovery: {
        screen: DiscoveryScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='md-earth' size={25} color={tabInfo.tintColor}/>)
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: 'Discovery'
        }
    },
    Messages: {
        screen: MessagesStackNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='md-chatbubble-outline' size={25} color={tabInfo.tintColor}/>)
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: 'Messages'
        }
    },
    Menu: {
        screen: MenuScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-construct-outline' size={25} color={tabInfo.tintColor}/>)
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: 'Menu'
        }
    }
}

const ClubsTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        }
    )
    : createBottomTabNavigator(tabScreenConfig,
        { // need specification over the
            //set identifier + object
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        }, {
            tabBarOptions: {
                activeBackgroundColor: Colors.primaryColor,
                inactiveBackgroundColor: Colors.accentColor,
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                },
                activeTintColor: Colors.accentColor,
            }
        }
    )

const MainDrawerNavigator = createDrawerNavigator(
    {   Events: ClubsTabNavigator,
        Admin: ClubEventsScreen
    }
)


export default createAppContainer(MainDrawerNavigator); //nested navigators pattern

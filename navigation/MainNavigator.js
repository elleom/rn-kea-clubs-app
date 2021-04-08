import React from 'react';
import {Platform} from 'react-native'
import {SimpleLineIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {createStackNavigator} from "@react-navigation/stack";

//navigation imports
import {createAppContainer} from 'react-navigation'
//import {createStackNavigator} from 'react-navigation-stack';
//import {createDrawerNavigator} from "react-navigation-drawer";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createBottomTabNavigator} from 'react-navigation-tabs';

//screens
import ClubsScreen from '../screens/ClubsScreen'
import DiscoveryScreen from "../screens/DiscoveryScreen";

//own imports
import Colors from "../constants/Colors";
import MessagesScreen from "../screens/MessagesScreen";
import MenuScreen from "../screens/MenuScreen";

const tabScreenConfig = {
    Clubs: {
        screen: ClubsScreen, navigationOptions: {
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
        screen: MessagesScreen, navigationOptions: {
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
    : createBottomTabNavigator(
        { // need specification over the
            //set identifier + object
            tabScreenConfig
        }, {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                },
                activeTintColor: Colors.accentColor,
            }
        }
    )


export default createAppContainer(ClubsTabNavigator); //nested navigators pattern
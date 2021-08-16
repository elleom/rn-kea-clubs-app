import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity, StatusBar} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import Colors from "../../constants/Colors";

const MenuScreen = props => {
    return (
        <View style={styles.text}>
            <Text>
                This is the Menu screen
            </Text>
            <Button title="Edit Profile" onPress={() => {
                props.navigation.navigate({
                    routeName: 'EditProfile'
                })
            }}/>
            <View style={styles.notifications}> 
                <Text style={styles.notificationsText}>
                Notifications
                </Text>
            </View>
        
            
            <View style={styles.logOut}> 
            <Button title="Log Out" onPress={() => {
                props.navigation.navigate({
                    routeName: 'LogOut'
                })
            }}/>  
            </View>
        </View>
    
    )
}

const styles = StyleSheet.create({
        text: {
            flex: 1,
            marginTop: 50,
            alignItems: 'center',
    

        },
        logOut: {
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 36,
            flexDirection: 'column',
            alignSelf: 'stretch',
            textAlign: 'center',
            paddingLeft: 20,
            paddingRight: 20
        },
        notifications: {
            flex: 1,
            marginBottom: 36,
            flexDirection: 'row',

        },
        notificationsText: {
            flex: 1,
            fontSize: 26,
            color: '#32305D',
            fontWeight: 'bold',
            textAlign: 'left',
            paddingLeft: 20
           

        },
        body: {
            backgroundColor: '#333',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            height: '100%',
          },
          container: {
            marginTop: 32,
            paddingHorizontal: 24,
          },
          linkContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: '#ddd',
            borderRadius: 40,
            height: 40,
            width: '80%',
          },
          link: {
            flex: 2,
            fontSize: 18,
            fontWeight: '400',
            color: '#333',
            justifyContent: 'center',
            alignItems: 'center',
          },
          separator: {
            backgroundColor: '#ddd',
            height: 1,
            width: '100%',
          },
    }
)

export default MenuScreen;

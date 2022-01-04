import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    Switch
} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import Colors from "../../constants/Colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from "../../components/UI/Card";

const MenuScreen = props => {
    return (
        <View style={styles.text}>
            <Card style={styles.card}>
                <View style={styles.personDetailsContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image}
                               source={{uri: 'https://www.fillmurray.com/g/140/100'}}
                        />
                    </View>
                    <View>
                        <Text style={styles.name}>Name HERE</Text>
                        <Text style={styles.description}>Email Here</Text>
                        <Text style={styles.description}>Description Here</Text>
                    </View>

                </View>
                <View style={styles.cardButton}>
                    <Button
                        title='Edit Profile'
                        color={Colors.accentColor}
                        onPress={() => {
                            props.navigation.navigate('Profile')
                        }}
                    />
                </View>
            </Card>
            <View style={styles.notificationContainer}>
                <View style={styles.notifications}>
                    <Text style={styles.notificationsText}>
                        Notifications
                    </Text>
                </View>
                <Card style={styles.cardSmall}>
                    <View style={styles.textSmallCardContainer}>
                        <Text style={styles.textOptionsHeader}>Event reminder</Text>
                        <Text style={styles.textOptionsBody}>An hour before events you are 'going to'</Text>
                    </View>
                    <Switch/>

                </Card>
                <Card style={styles.cardSmall}>
                    <View style={styles.textSmallCardContainer}>
                        <Text style={styles.textOptionsHeader}>Chat</Text>
                        <Text style={styles.textOptionsBody}>When you receive a message</Text>
                    </View>
                    <Switch/>
                </Card>
            </View>


            <View style={styles.logOut}>
                <Icon.Button name="logout"
                             size={50}

                             backgroundColor={Colors.accentColor}
                             onPress={() => {
                                 props.navigation.navigate({
                                     routeName: 'Auth'
                                 })
                             }}>LogOut
                </Icon.Button>
            </View>
        </View>

    )
}

MenuScreen.navigationOptions = navData => {

    return {
        headerStyle: {
            backgroundColor: Colors.primaryColor,


        },
        headerTitle: 'User Options',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Menu'
                iconName={'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
        text: {
            flex: 1,
            marginTop: 10,
            alignItems: 'center',
        },
        logOut: {
            width: '100%',
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 20,
            flexDirection: 'column',
            alignSelf: 'center',
            textAlign: 'center',
            paddingLeft: 20,
            paddingRight: 20
        },
        notifications: {
            flexDirection: 'row',
            marginTop: 15
        },
        notificationsText: {
            flex: 1,
            fontSize: 26,
            color: Colors.accentColor,
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
        card: {
            marginTop: 0,
            height: '35%',
            width: '95%',
            alignItems: "center",
            padding: 20,
            paddingBottom: 20,
            color: '#c42c2c'

        },
        cardButton: {
            width: "50%"
        },
        personDetailsContainer: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            flexDirection: 'row',
            flex: 1
        },
        imageContainer: {
            width: "30%",
            borderRadius: 150 / 2,
            overflow: "hidden",
            marginRight: 15
        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'stretch',
        },
        name: {
            fontFamily: 'oxanium-bold',
            fontSize: 24
        },
        description: {
            fontFamily: 'oxanium',
            fontSize: 14
        },
        cardSmall: {
            marginTop: 10,
            height: '25%',
            width: '100%',
            alignItems: "center",
            color: '#c42c2c',
            flexDirection: 'row'
        },
        notificationContainer: {
            height: '60%',
            width: '95%',
            flexDirection: 'column',
            alignItems: "center",
        },
        textSmallCardContainer: {
            width: '80%',
            marginLeft: 15
        },
        textOptionsHeader: {
            fontFamily: 'oxanium-bold',
            fontSize: 15
        },
        textOptionsBody: {
            fontFamily: 'oxanium',
            fontSize: 15
        },

    }
)

export default MenuScreen;

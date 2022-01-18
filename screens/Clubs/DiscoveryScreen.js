import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native'
import Colors from "../../constants/Colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import ClubsScreen from "./ClubsScreen";
import {FontAwesome5} from "@expo/vector-icons";

import {TouchableOpacity} from "react-native";
import TextInputState from "react-native-web/dist/modules/TextInputState";
import Card from "../../components/UI/Card";
import {ImageBackground} from "react-native";

const DiscoveryScreen = props => {
    const [textValue, setTextValue] = useState("Search something");

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="search" size={30} color="#c8d0d8"/>
                <TextInput value={textValue} onChangeText={setTextValue}/>
            </View>
            <TouchableOpacity style={styles.cardContainer}>
                <Card style={styles.card}>
                    <ImageBackground
                        source={{uri: 'https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/anatomy-of-a-blog-post-deconstructed-open-graph.jpg'}}
                        style={styles.bgImage}>
                        <Text style={styles.text}>
                            ALL POSTS
                        </Text>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer}>
                <Card style={styles.card}>
                    <ImageBackground
                        source={{uri: 'https://event-buddy.dk/wp-content/uploads/2021/03/MW9A2233.jpg'}}
                        style={styles.bgImage}>
                        <Text style={styles.text}>
                            ALL EVENTS
                        </Text>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContainer}>
                <Card style={styles.card}>
                    <ImageBackground
                        source={{uri: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg'}}
                        style={styles.bgImage}>
                        <Text style={styles.text}>
                            ORGANIZATIONS
                        </Text>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
        cardContainer: {
            height: '25%',
            marginTop: 15,
            width: '100%'

        },
        container: {
            margin: '10%',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center'
        },
        inputContainer: {
            width: '85%',
            flexDirection: 'row',
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 15,
            marginBottom: 5
        },
        card: {
            width: '80%',
            height: '100%',
            borderWidth: 1,

            margin: 10,
            backgroundColor: Colors.primaryColor
        },
        text: {
            fontSize: 30,
            color: 'white',
            fontStyle: 'normal',
            fontFamily: 'oxanium-bold'
        },
        bgImage: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
)

DiscoveryScreen.navigationOptions = navData => {
    return {
        headerStyle: {
            backgroundColor: Colors.accentColor
        },
        headerTitle: 'Discovery',

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


export default DiscoveryScreen;

import React, {useState} from 'react';
import {ScrollView, TextInput, View, StyleSheet, Button, KeyboardAvoidingView, Text, Image} from "react-native";
import Card from "../../components/UI/Card";
import Colors from "../../constants/Colors";
import {useDispatch} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import {signUp} from "../../store/actions/AuthActions";

const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const [isRegistered, setIsRegistered] = useState(false)

    const authHandler = () => {
        if (isRegistered) {
            dispatch(authActions.signUp(email, password))
        }
        else {
          dispatch(authActions.singIn(email, password))
        }
    }


    return (
        <View style={styles.screen}>
            <KeyboardAvoidingView keyboardVerticalOffset={50}>
                <Card style={styles.authContainer}>
                    <Image source={{uri: 'https://kea.dk/images/DA/Presse/Downloads/KEA_logo_DK_Web.jpg'}}
                           style={{width: 200, height: 75}}/>
                    <ScrollView>
                        <View style={styles.inputContainer}>
                            <Text>Email</Text>
                            <TextInput
                                value={email}
                                onChangeText={text => setEmail(text)}
                                keyboardType='email-address'
                                required email
                                autoCapitalize="none"/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Password</Text>
                            <TextInput
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={true}
                                required
                                autoCapitalize='none'/>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.buttons}
                                    title={isRegistered ? 'Login' : 'Sign Up'}
                                    color={Colors.accentColor} onPress={authHandler}/>
                            <Button style={styles.buttons}
                                    title={`Switch to ${isRegistered ? 'Log In' : 'Sign Up'}`}
                                    color={Colors.primaryColor}
                                    onPress={() => {
                                        setIsRegistered(prevState =>  !prevState);
                                    }}/>
                        </View>
                    </ScrollView>
                </Card>
            </KeyboardAvoidingView>
        </View>
    )
}

AuthScreen.navigationOptions = () => {
    return {
        headerTitle: 'Authenticate',
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'

    },
    buttons: {
        width: 100,
        height: 25,
        padding: 15
    },
    authContainer: {
        width: '90%',
        padding: 25,
        maxHeight: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AuthScreen;

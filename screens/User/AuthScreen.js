import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    TextInput,
    View,
    StyleSheet,
    Button,
    KeyboardAvoidingView,
    Text,
    Image,
    ActivityIndicator, Alert
} from "react-native";
import Card from "../../components/UI/Card";
import Colors from "../../constants/Colors";
import {useDispatch} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';

const AuthScreen = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const [isRegistered, setIsRegistered] = useState(false)

    useEffect(() => {
        if (error) {
            console.warn('INNN')
;            Alert.alert('An error occurred', error, [{cardContainer: 'OK'}])
        }
    }, [error])

    const authHandler = async () => {
        let action;

        if (isRegistered) {
            console.log('Signing up')
            action = authActions.signUp(email, password)
        } else {
            console.log('Login in')
            action = authActions.singIn(email, password)
        }
        setError(null);
        setIsLoading(true)
        try {
            await dispatch(action);
            /*
            if we made it this far then we can go IN :)
             */
            props.navigation.navigate('Clubs')
        } catch (err) {
            setError(err.toString());
            setIsLoading(false); //cant be outside cause we might be leaving the screen
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
                            {isLoading ? <ActivityIndicator size='small' color={Colors.primaryColor}/>
                                : (
                                    <Button style={styles.buttons}
                                            title={isRegistered ? 'Sign Up' : 'Log In'}
                                            color={Colors.accentColor} onPress={authHandler}/>)}
                            < Button style={styles.buttons}
                                     title={`Switch to ${isRegistered ? 'Log In' : 'Sign Up'}`}
                                     color={Colors.primaryColor}
                                     onPress={() => {
                                         setIsRegistered(prevState => !prevState);
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

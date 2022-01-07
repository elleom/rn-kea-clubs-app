import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from "react-native";
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/AuthActions';

const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');

            /** if no user data then we are not logeed in */
            if (!userData) {
                props.navigation.navigate('Auth');
                return;
            }
            const transformedData = JSON.parse(userData);
            const { token, userId, expiryDate } = transformedData; //destructuring
            const expirationDate = new Date(expiryDate);

            /** fires when:
             * token is past the time set on time to live
             * not token
             * no userID
             */
            if (expirationDate <= new Date() || !token || !userId) {
                props.navigation.navigate('Auth');
                return;
            }

            props.navigation.navigate('Clubs');
            dispatch(authActions.authenticate(userId, token));
        };

        tryLogin();
    }, [dispatch]);

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartupScreen;

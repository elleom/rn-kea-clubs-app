import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const API_KEY = 'AIzaSyDnVW-L2Us31TnRSlyOy2s_a2KZq4cSofg';

export const authenticate = (userId, token) => {
    return { type: AUTHENTICATE, userId: userId, token: token}
}

export const signUp = (email, password) => {

    return async dispatch => {

        try {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
                {
                    method: 'POST',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true
                    })
                }
            )
            if (!response.ok) {
                const errorResponseData = await response.json()
                throw new Error(errorResponseData.error.message)
            }

            const responseData = await response.json();
            console.log(responseData.localId);
            dispatch({
                type: SIGN_UP, token: responseData.idToken, userId: responseData.localId
            })
            const expirationDate = new Date(new Date().getTime() + parseInt(responseData.expiresIn) * 1000);
            saveDataToStorage(responseData.idToken, responseData.localId, expirationDate);
        } catch (error) {
            console.error(error)
        }

    }
}

export const singIn = (email, password) => {
    return async dispatch => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            })

        if (!response.ok) {
            const errorResponseData = await response.json()
            let message = errorResponseData.error.message;
            if (message === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!';
            } else if (message === 'INVALID_PASSWORD') {
                message = 'This password is not valid!';
            }
            throw new Error(message);
        }
        const responseData = await response.json();
        console.log('Login in:' + responseData.localId);


        dispatch({
            type: SIGN_IN, token: responseData.idToken, userId: responseData.localId
        });
        const expirationDate = new Date(new Date().getTime() + parseInt(responseData.expiresIn) * 1000);
        saveDataToStorage(responseData.idToken, responseData.localId, expirationDate);
    }
}

export const logout = () => {
    return { type: LOGOUT }
}

/** save to the device */
const saveDataToStorage = (token, userId, expirationDate) => {
    AsyncStorage.setItem('userData',
        JSON.stringify({
            token: token,
            userId: userId,
            expirationDate: expirationDate.toISOString()
        }))
}




export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const API_KEY = 'AIzaSyDnVW-L2Us31TnRSlyOy2s_a2KZq4cSofg';

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
                type: SIGN_UP, token: responseData.idToken , userId: responseData.localId
            })
        } catch (error) {
            console.error(error)
        }

    }
}

export const singIn = (email, password) => {
    return async dispatch => {
        try {
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
                throw new Error(errorResponseData.error.message);
            }
            const responseData = await response.json();
            console.log(responseData.localId);


            dispatch({
                type: SIGN_IN, token: responseData.idToken , userId: responseData.localId
            })
        } catch (error) {
            console.error(error)
        }
    }
}


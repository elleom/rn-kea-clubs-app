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
        throw new Error('Not possible to create this user')
      }
      const responseData = await response.json(); //transform from json to js
      console.log(responseData);
    } catch (error) {
        console.error(error)
    }
    dispatch({
      type: SIGN_UP
    })
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

      const responseDate = await response.json();

      dispatch({
        type: SIGN_IN
      })

    } catch (error) {
      console.error(error)
    }
  }
}


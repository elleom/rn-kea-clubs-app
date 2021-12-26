import Event from '../../models/Event';

export const UPDATE_EVENT = 'UPDATE_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const SET_EVENTS = 'SET_EVENTS';

export const fetchEvents = () => {

    const loadedEvents = [];

    return async (dispatch, getState) => {

        const userId = getState().auth.userId;

        // const response = await fetch('https://rn-kea-app-default-rtdb.firebaseio.com/events.json', {
        const response = await fetch('http://10.0.2.2:8080/api/events/', {
            method: 'GET' //default
        }).then(res => res.json())
            .then((responseData) => {
                for (const key in responseData) {
                    console.log(key)
                    console.log(responseData[key])

                    loadedEvents.push(new Event(
                        responseData[key].id,
                        responseData[key].userId,
                        responseData[key].type,
                        // responseData[key].title,
                        responseData[key].description,
                        responseData[key].imageUrl,
                        responseData[key].startDate,
                        responseData[key].endDate,
                        responseData[key].location,
                        // responseData[key].organization,
                    ))
                }


            });
        // const responseData = await response.json()

        dispatch({
            type: SET_EVENTS,
            events: loadedEvents,
            userEvents: loadedEvents.filter(event => event.userId === userId)
        })
    }
}

export const updateEvent = (id, type, title, description, imageUrl, startDate, endDate, location, organization) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        console.log('This is the '+id);

        //save promise into const   OBS: similar to use .then() after the fetch call
        //uses ` symbol to inject dynamic data to it
        // no reason to store the response
        const responseData = await fetch(`https://rn-kea-app-default-rtdb.firebaseio.com/events/${id}.json?auth=${token}`, //REST API, can GET/POST/ => returns a promise
            {
                method: 'PATCH', // patch updates the element, puts replaces completely
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify({
                        id,
                        type,
                        title,
                        description,
                        imageUrl,
                        location,
                        organization
                    }
                )
            })

        if (!responseData.ok) {
            throw new Error('Can\'t update!');
        }

        console.log(responseData)

        dispatch({
            type: UPDATE_EVENT,
            eventId: id,
            eventData: {
                eventId: id,
                userId: userId,
                type: type,
                title: title,
                description: description,
                imageUrl: imageUrl,
                startDate: startDate,
                endDate: endDate,
                location: location,
                organization: organization
            }
        })
    }
}

export const createEvent = (type, title, description, imageUrl, startDate, endDate, location, organization) => {

    /**
     * redux-thunk syntax manages it
     * if the action returns a func then thunk takes over and dispatches the action
     * as it was originally, though async code can be introduced in the func
     */
    return async (dispatch, getState) => { //added async func
        //then before dispatch

        const token = getState().auth.token;  //auth is the name of the reducer declared on APP
        const userId = getState().auth.userId;

        //save promise into const   OBS: similar to use .then() after the fetch call
        const response = await fetch(`https://rn-kea-app-default-rtdb.firebaseio.com/events.json?auth=${token}`, //REST API, can GET/POST/ => returns a promise
            {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify({
                        userId,
                        type,
                        title,
                        description,
                        imageUrl,
                        startDate,
                        endDate,
                        location,
                        organization
                    }
                )
            })

        //responseData.name will be the ID
        const responseData = await response.json();

        //this will only dispatch once the previous is done
        dispatch({
                type: CREATE_EVENT,
                // pid: id,
                eventData: {
                    id: responseData.name, //use as identifier in the rt-db
                    userId: '1',
                    type: type,
                    title: title,
                    description: description,
                    imageUrl: imageUrl,
                    startDate: startDate,
                    endDate: endDate,
                    location: location,
                    organization: organization
                }
            }
        )
    }
}


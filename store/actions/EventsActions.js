import Event from '../../models/Event';

export const UPDATE_EVENT = 'UPDATE_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const SET_EVENTS = 'SET_EVENTS';

export const fetchEvents = () => {
    return async dispatch => {

        const response = await fetch('https://rn-kea-app-default-rtdb.firebaseio.com/events.json', {
            method: 'GET' //default
        })
        const responseData = await response.json()
        const loadedEvents = [];

        for (const key in responseData) {
            loadedEvents.push(new Event(
                key,
                responseData[key].userId,
                responseData[key].type,
                responseData[key].title,
                responseData[key].description,
                responseData[key].imageUrl,
                responseData[key].startDate,
                responseData[key].endDate,
                responseData[key].location,
                responseData[key].organization,
            ))
        }
        dispatch({
            type: SET_EVENTS,
            events: loadedEvents
        })
    }
}

export const updateEvent = (id, type, title, description, imageUrl, startDate, endDate, location, organization) => {
    return {
        type: UPDATE_EVENT,
        eventId: id,
        eventData: {
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
}

export const createEvent = (userId, type, title, description, imageUrl, startDate, endDate, location, organization) => {

    /**
     * redux-thunk syntax manages it
     * if the action returns a func then thunk takes over and dispatches the action
     * as it was originally, though async code can be introduced in the func
     */
    return async dispatch => { //added async func
        //then before dispatch

        //save promise into const   OBS: similar to use .then() after the fetch call
        const response = await fetch('https://rn-kea-app-default-rtdb.firebaseio.com/events.json', //REST API, can GET/POST/ => returns a promise
            {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify({
                        userId,
                        type,
                        title,
                        description,
                        imageUrl: imageUrl,
                        startDate,
                        endDate,
                        location,
                        organization
                    }
                )
            })

        const responseData = await response.json();
        console.log(responseData)

        //this will only dispatch once the previous is done
        dispatch({
                type: CREATE_EVENT,
                // pid: id,
                eventData: {
                    id: responseData.name, //use as identifier in the rt-db
                    userId: '1',
                    type: 'event',
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


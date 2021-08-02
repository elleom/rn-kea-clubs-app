export const UPDATE_EVENT = 'UPDATE_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';

export const updateEvent = (id, type, title, description, image, startDate, endDate, location, organization) => {
    return {
        type: UPDATE_EVENT,
        eventId: id,
        eventData: {
            type: type,
            title: title,
            description: description,
            image: image,
            startDate: startDate,
            endDate: endDate,
            location: location,
            organization: organization
        }
    }
}

export const createEvent = (id, type, title, description, image, startDate, endDate, location, organization) => {

    /**
     * redux-thunk syntax manages it
     * if the action returns a func then thunk takes over and dispatches the action
     * as it was originally, though async code can be introduced in the func
     */
    return async dispatch => { //added async func
        //then before dispatch

        //save promise into const   OBS: similar to use .then() after the fetch call
        const response = await fetch('https://kea-app-rn-default-rtdb.firebaseio.com/events.json', //REST API, can GET/POST/ => returns a promise
            {
                method: 'POST',
                headers: {'Content-Type': 'Application/json'},
                body: JSON.stringify({
                        type,
                        title,
                        description,
                        image,
                        startDate,
                        endDate,
                        location,
                        organization
                    }
                )
            })

        const responseData = await response.json();

        //this will only dispatch once the previous is done
        dispatch({
                type: CREATE_EVENT,
                // pid: id,
                productData: {
                    id: responseData.name, //use as identifier in the rt-db
                    title: title,
                    description: description,
                    image: image,
                    startDate: startDate,
                    endDate: endDate,
                    location: location,
                    organization: organization
                }
            }
        )
    }
}


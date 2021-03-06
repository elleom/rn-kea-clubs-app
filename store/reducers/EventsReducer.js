import {CREATE_EVENT, SET_EVENTS, UPDATE_EVENT} from "../actions/EventsActions";
import Event from "../../models/Event";

/**
 * reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 */

const initialState = {
    availableEvents: [], //EVENTS, //holds all events
    userEvents: [], // EVENTS.filter(event => event.id === '1') //hc val for test
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            const newEvent = new Event(
                action.eventData.id, //id
                action.eventData.userId, //get value on the reducer auth
                action.eventData.type,
                action.eventData.title,
                action.eventData.description,
                action.eventData.imageUrl,
                action.eventData.startDate,
                action.eventData.endDate,
                action.eventData.organization
            );
            return {
                ...state,
                availableEvents: state.availableEvents.concat(newEvent),
                userEvents: state.availableEvents.concat(newEvent),
            }
        case SET_EVENTS:
            return {
                availableEvents: action.events,
                userEvents: action.userEvents
            }
        case UPDATE_EVENT:
            const eventIndex = state.userEvents.findIndex(
                event => event.id === action.eventId
            );
            const updatedEvent = new Event(
                action.eventId,
                state.eventData[eventIndex].ownerId,
                state.eventData.type,
                action.eventData.title,
                action.eventData.description,
                action.eventData.imageUrl,
                action.eventData.startDate,
                action.eventData.endDate,
                action.eventData.location,
                action.eventData.organization
            );
            console.log(updatedEvent)
            const updatedUserEvents = [...state.userEvents];
            updatedUserEvents[eventIndex] = updatedEvent;
            const availableEventIndex = state.availableEvents.findIndex(
                event => event.id === action.eventId
            );
            const updatedAvailableEvents = [...state.availableEvents];
            updatedAvailableEvents[availableEventIndex] = updatedEvent;
            return {
                ...state,
                availableProducts: updatedAvailableEvents,
                userEvents: updatedUserEvents
            };
    }
    return state;
}

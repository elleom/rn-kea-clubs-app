import {EVENTS} from "../../data/dummy-data";
import {CREATE_EVENT, SET_EVENTS, UPDATE_EVENT} from "../actions/EventsActions";
import Event from "../../models/Event";

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
                action.eventData.description
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
    }
    return state;
}

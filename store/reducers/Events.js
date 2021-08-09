import {EVENTS} from "../../data/dummy-data";
import {CREATE_EVENT, UPDATE_EVENT} from "../actions/EventsActions";
import Event from "../../models/Event";

const initialState = {
    availableEvents : EVENTS //holds all events
    userEvents: EVENTS.filter(event => event.id === '1') //hc val for test
}

export default (state = initialState, action) => {
    switch (action.type) {

    }
}

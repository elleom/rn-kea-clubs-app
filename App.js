
import React from 'react';
import MainNavigator from "./navigation/MainNavigator";

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ChatReducer from './store/reducers/ChatReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';


const rootReducer = combineReducers({
  chat: ChatReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (
    <Provider store={store}>
    <MainNavigator />
    </Provider>
  );
}

import React  from "react";
import MainNavigator from "./navigation/MainNavigator";
import FirstScreen from "./screens/FirstScreen";

import { Provider } from "react-redux";
import ChatReducer from "./store/reducers/ChatReducer";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";


const rootReducer = combineReducers({
  chat: ChatReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  return (
    <Provider store={store}>
      <FirstScreen />
    </Provider>
  );
}

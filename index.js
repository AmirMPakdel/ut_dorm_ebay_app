/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './src/redux/Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers);

const wrapRedux = ()=>{

    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => wrapRedux);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
//import PermissionsProvider from "./PermissionsProvider";

import reducers from './reducers'; 
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

//const permissions = ["read", "write"];


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            	<Routes/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'));
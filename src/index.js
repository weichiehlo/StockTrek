import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import App from './containers/App.js'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { requestStocks } from './reducers';
import thunkMiddleware from 'redux-thunk' ;

const logger = createLogger();

const rootReducer = combineReducers({ requestStocks })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));



ReactDOM.render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import App from './components/App';
import rootReducer from './reducers/index';

import'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = composeWithDevTools({trace : true});
const store = createStore(rootReducer,{},composeEnhancers(applyMiddleware(ReduxPromise)));//,{},composeEnhancers(applyMiddleware()));

ReactDOM.render(
	<Provider store ={store}>
	<App />
	</Provider>,
	document.getElementById('root')
);


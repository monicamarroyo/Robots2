import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchRobots,requestRobots} from './reducers';
//middle-wear redux-logger
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
//if we do npm run build it optimizes everything and can be delpoyed everything and takes away the pain of the setup 
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,/*logger*/));
ReactDOM.render( 
<Provider store = {store}>
 <App />
 </Provider>,
 document.getElementById('root'));
registerServiceWorker();

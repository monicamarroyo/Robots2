//action that onSearchChange, will recieve an input of text, and were returning an object of type change_search_field, a payload of text, this action is going to take text and return an object the action and send(payload) thats going to be sent to the reducer

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
///dispatch our action
//this is going to return a dispatch function so we can use it here
export const requestRobots = () => (dispatch) => {
dispatch({type:REQUEST_ROBOTS_PENDING});
//ASYNC FETCH CALL
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
}
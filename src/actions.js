import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_STOCKS_PENDING,
    REQUEST_STOCKS_SUCCESS,
    REQUEST_STOCKS_FAILED
 } from './constants';

 import {APIKEY} from './key.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestStocks = (stockName) => (dispatch) => {
    dispatch({ type: REQUEST_STOCKS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_STOCKS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_STOCKS_FAILED, payload: error }))
}



// export const requestSTOCKS = () => (dispatch) => {
//     dispatch({ type: REQUEST_STOCKS_PENDING});
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=> response.json())
//     .then(data => dispatch({ type: REQUEST_STOCKS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_STOCKS_FAILED, payload: error }))
// }


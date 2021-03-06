import {
    REQUEST_STOCKS_PENDING,
    REQUEST_STOCKS_SUCCESS,
    REQUEST_STOCKS_FAILED,
 } from './constants';

 import {APIKEY} from './key.js'



export const requestStocks = (stockName) => (dispatch) => {
    dispatch({ type: REQUEST_STOCKS_PENDING});
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockName}&interval=5min&apikey=${APIKEY}`, {
            method: 'get',
            })
    .then(response=> response.json())
    .then(data => {
        dispatch({ type: REQUEST_STOCKS_SUCCESS, payload: data })})
    .catch(error => dispatch({ type: REQUEST_STOCKS_FAILED, payload: error }))
//     dispatch({ type: REQUEST_STOCKS_PENDING});
//     fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`, {
//             method: 'get',
//             })
//     .then(response=> response.json())
//     .then(data => {
//         dispatch({ type: REQUEST_STOCKS_SUCCESS, payload: data })})
//     .catch(error => dispatch({ type: REQUEST_STOCKS_FAILED, payload: error }))
}






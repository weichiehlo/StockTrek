import { 
    REQUEST_STOCKS_PENDING,
    REQUEST_STOCKS_SUCCESS,
    REQUEST_STOCKS_FAILED
 } from './constants';


const initialStateStocks = {
    isPending: false,
    stocks: [],
    error: ''

}

export const requestStocks = (state = initialStateStocks, action = {}) => {
    switch(action.type){
        case REQUEST_STOCKS_PENDING:
            return {...state, isPending: true};
        case REQUEST_STOCKS_SUCCESS:
            return {...state, stocks: action.payload, isPending: false};
        case REQUEST_STOCKS_FAILED:
            return { ...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}
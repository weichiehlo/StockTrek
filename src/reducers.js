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

const addStock = (data)=>{
    let d = new Date();
    let marketInactive = false;
    let time

    // If the market is closed
    if(d.getHours()>15){
        marketInactive = true;
    }

    //add zero padding
    let month  = (d.getMonth()+1).toString();
    if(month.length === 1){
        month = "0" + month
    } 

    let minutes  = (Math.floor(d.getMinutes()/5)*5).toString();
    if(minutes.length === 1){
        minutes = "0" + minutes
    } 

    let date = d.getDate().toString();;
    if(date.length === 1){
        date = "0"+date
    }

    //If the market is closed then set the time to 4PM else set the closest time, in a 5 minutes interval
    if(marketInactive){
        time = d.getFullYear()+"-"+month+"-"+date+" 16:00:00"
    }else{
        time = d.getFullYear()+"-"+month+"-"+date+" "+d.getHours()+":"+minutes+":00"
    }

    let getlatestAvg = ()=>{
        let high = data["Time Series (5min)"][time]['2. high']
        let low = data["Time Series (5min)"][time]['3. low']
        return ((parseFloat(high)+parseFloat(low))/2).toFixed(2)
    }
    
    let getAllAvg = ()=>{
    
        let intervals = Object.keys(data["Time Series (5min)"]);
        let total = intervals.reduce((a, interval)=>{
            let high = data["Time Series (5min)"][interval]['2. high']
            let low = data["Time Series (5min)"][interval]['3. low']
            return a + (parseFloat(high)+parseFloat(low))/2
        }
        ,0)
        return (total/intervals.length).toFixed(2)
    }

    let getMin = ()=>{
        let intervals = Object.keys(data["Time Series (5min)"]);
        let min;
        for(let interval of intervals){
            if(min === undefined){
                min = data["Time Series (5min)"][interval]['3. low']
            }else if(data["Time Series (5min)"][interval]['3. low']<min){
                min = data["Time Series (5min)"][interval]['3. low']
            }
            
        }
        return parseFloat(min).toFixed(2)
       
    }

    let getMax = ()=>{
        let intervals = Object.keys(data["Time Series (5min)"]);
        let max;
        for(let interval of intervals){
            if(max === undefined){
                max = data["Time Series (5min)"][interval]['2. high']
            }else if(data["Time Series (5min)"][interval]['2. high']>max){
                max = data["Time Series (5min)"][interval]['2. high']
            }
        }
        return parseFloat(max).toFixed(2)
       
    }

    return {"symbol":data["Meta Data"]["2. Symbol"],"price":getlatestAvg(),"average":getAllAvg(), "max":getMax(), "min":getMin()}
}

export const requestStocks = (state = initialStateStocks, action = {}) => {
    switch(action.type){
        case REQUEST_STOCKS_PENDING:
            return {...state, isPending: true};
        case REQUEST_STOCKS_SUCCESS:
            return {...state, stock: addStock(action.payload), isPending: false};
        case REQUEST_STOCKS_FAILED:
            return { ...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}
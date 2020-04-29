////TO Do list;
//Combine test and add button 
// check if the stock is already in the state list, if so skip
//loop through all the stocks in  the list, maximum 2
//componentdidmount all the preexisting stock



import React, {Component}from 'react'
import CardList from '../components/CardList.js'
import AddBox from '../components/AddBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

import { requestStocks } from '../actions';
import { connect } from 'react-redux'



class App extends Component{

    constructor(){
        super();
        this.state = {
            stocks:['FTNT','OXY'],
            stockDisplayData:[],
            addField:''
        }
    }

    componentDidMount(){
        // this.props.requestStocks(this.state.stocks[1]);
    }


    addChange = (event)=>{
        let name = event.target.value;
        this.setState({
            addField: name
          });
    }


    sleep = (ms) =>{
            return new Promise(resolve => setTimeout(resolve, ms));
          }

    addStocktoState = async()=>{
        let timer = 0;
        while(timer < 10 && !this.props.stock){
            timer +=1;
            await this.sleep(1000)
        }
        this.setState({stockDisplayData:[...this.state.stockDisplayData,this.props.stock]})
        if(timer === 10){
            console.log("unable to retrieve data")
        }

    }

    addSubmit = (event) =>{
        event.preventDefault();
        if(this.state.addField){
            this.setState({stocks:[...this.state.stocks,this.state.addField]})
        }
        this.props.requestStocks(this.state.stocks[this.state.stocks.length-1]);

        this.addStocktoState()
        
       
        
    }

    testButton = (event) =>{
        console.log('-----------')
        console.log(this.state.stockDisplayData)
        console.log('-----------')
    }


    render(){
        const { searchField, stocks, isPending } = this.props;
        
        let filteredStocks
        Array.isArray(stocks) ?
            filteredStocks = stocks.filter((stock) => {
                return (stock.name.toLowerCase().includes(searchField.toLowerCase()))
            })
            :
            filteredStocks = []
        return isPending?
        <h1 className='f1'>LOADING</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>StockTrek</h1>
                <AddBox addChange ={this.addChange} addSubmit={this.addSubmit}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList stocks = {filteredStocks}/>
                    </ErrorBoundry>
                </Scroll>
                <button type="button" onClick = {this.testButton} >Test Button!</button>
                
            </div>
    
        );
        
        
        
    }
    
}

const mapStateToProps = state =>{
    return {
        stock: state.requestStocks.stock,
        isPending: state.requestStocks.isPending,
        error: state.requestStocks.error

    }
}


export default connect(mapStateToProps, {requestStocks})(App);
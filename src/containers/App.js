////TO Do list;
// add min and max to the stock



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
            stocks:[],
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

    addStocktoState = async(stock)=>{
        let timer = 0;
        while(timer < 10 && !this.props.stock){
            timer +=1;
            await this.sleep(1000)
        }

        timer = 0;
        while(timer < 10 && this.props.stock.symbol !== stock){
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
            let currentStock = this.state.addField.toUpperCase();
            if(!this.state.stocks.includes(currentStock)){
                this.props.requestStocks(currentStock);
                this.setState({stocks:[...this.state.stocks,currentStock]})
                this.addStocktoState(currentStock)
                

            }
            
        }

 
        
       
        
    }

    testButton = (event) =>{
        console.log('-----------')
        console.log(this.state.stockDisplayData)
        console.log(this.state.stocks)
        console.log('-----------')
    }


    render(){
        const { isPending } = this.props;
        return isPending?
        <h1 className='f1'>LOADING</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>StockTrek</h1>
                <AddBox addChange ={this.addChange} addSubmit={this.addSubmit}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList stocks = {this.state.stockDisplayData}/>
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
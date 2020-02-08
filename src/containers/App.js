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
            stocks:['FTNT','GILD'],
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

    addSubmit = (event) =>{
        console.log(this.state.addField);
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
                
            </div>
    
        );
        
        
        
    }
    
}

const mapStateToProps = state =>{
    return {
        stocks: state.requestStocks.stocks,
        isPending: state.requestStocks.isPending,
        error: state.requestStocks.error

    }
}


export default connect(mapStateToProps, {requestStocks})(App);
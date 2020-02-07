import React, {Component}from 'react'
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

import { setSearchField, requestStocks } from '../actions';
import { connect } from 'react-redux'



class App extends Component{

    constructor(){
        super();
    }

    componentDidMount(){
        this.props.requestStocks('TSLA');
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
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.props.setSearchField}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredStocks}/>
                    </ErrorBoundry>
                    
                </Scroll>
                
            </div>
    
        );
        
        
        
    }
    
}

const mapStateToProps = state =>{
    return {
        searchField: state.searchStocks.searchField,
        stocks: state.requestStocks.stocks,
        isPending: state.requestStocks.isPending,
        error: state.requestStocks.error

    }
}


export default connect(mapStateToProps, {setSearchField, requestStocks})(App);
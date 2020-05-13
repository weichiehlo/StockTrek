import React, {Component}from 'react'

class Time extends Component{
    constructor(){
        super()
        this.state  = {time:this.formatTime()}
    }

    formatTime = ()=>{
        let d = new Date();
    
        //add zero padding
        let month  = (d.getMonth()+1).toString();
        if(month.length === 1){
            month = "0" + month
        } 
    
        let minutes  = d.getMinutes().toString();
        if(minutes.length === 1){
            minutes = "0" + minutes
        } 
    
        let date = d.getDate().toString();
        if(date.length === 1){
            date = "0"+date
        }

        let second = d.getSeconds().toString();
        if(second.length === 1){
            second = "0"+second
        }

        return d.getFullYear()+"-"+month+"-"+date+" "+d.getHours()+":"+minutes+":"+second
    }

    render(){
        return (
            <div className='f1 light-blue grow '>{this.state.time}</div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(()=>this.setState({time:this.formatTime()}),1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }

}

export default Time;
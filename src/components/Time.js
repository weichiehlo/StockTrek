import React, { useState, useEffect }from 'react'

const Time = props => {
    
    const [time, setTime] = useState("00:00:00")

    const formatTime = ()=>{
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



    useEffect(() => {
        let interval = setInterval(()=>setTime(formatTime()),1000)
        return () =>{
            clearInterval(interval)
        }
    }, []);


   
    return (
        <div className='f1 light-blue grow '>{time}</div>
    );

}

export default Time;
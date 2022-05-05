import React from 'react'
import ReactDom from 'react-dom'
import CounterDisplay from './CounterDisplay'


// counter class is inherted from a predined class present in react libary( rect.component)
class Counter extends React.Component
{
    constructor(props){
       super(props)    // call for the parent class constructor(constructor present in the react.component class))
       this.state= {
           count:0
           }
    }

    increment=()=>{
       // var a=a+1;
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        if(this.state.count>0)
        this.setState({count:this.state.count-1})
    }

    reset=()=>{
        this.setState({count:0})
    }

    increment()
    {
        this.setState({count:this.state.count+1})
        console.log("plusbutton");
        console.log(this.state.count);
       
    }
    handler = (action)=>

    { console.log("calculate");
        if(action ==="plus")
        { this.setState({count:this.state.count+1})}       
        else if(action==="minus")
        {  if(this.state.count>0)
            this.setState({count:this.state.count-1})}
       
        else if(action ==="reset")
        this.setState({count:0})
    }
render()
{
    return(
    <>
    <div style={{backgroundColor:'lightpink'}}>
        <div className='div1'> <button className='btn btn-primary' onClick={()=>this.handler("plus")}> + </button> </div>
        <CounterDisplay count={this.state.count}></CounterDisplay>
        <div className='div2'> <button className='btn btn-info' onClick={()=>this.handler("minus")}> - </button>  </div> 
        <div className='div3'>  <button className='btn btn-success' onClick={()=>this.handler("reset")}>reset</button> </div>
    </div>
    </>)
    
    
    } 
}

export default Counter



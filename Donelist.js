import React from "react";
import ReactDom from 'react-dom';

class Donelist extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.doItem)
        return(
            <>
            <h4>Donelist</h4>
            {
                this.props.doItem.map((item)=>{
                    return(
                        <h5>{item.title}</h5>
                    )
                }
                )

            
            }
            </>
        )
    }
}

export default Donelist
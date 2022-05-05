import React from "react";
import ReactDom from 'react-dom';


class Dolist extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.doItem)
        return(
            <>
            <h4>Dolist</h4>
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

export default Dolist
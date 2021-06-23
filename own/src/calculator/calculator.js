import React from "react"

const number =  [0,1,2,3,4,5,6,7,8,9];
const operator =  ['+','-','/','*','='];

class Calculator extends React.Component{
    constructor(){
        super();
        this.state={
            display: "",
            operation: ""
        }
            }

    handlenoclick=(e)=>{
        const newDisplay = `${this.state.display}${e.target.value}`; //for getting manyjavascript value in string
        this.setState({
            display: newDisplay
        })

    }   
    handleoperatorclick=(e)=>{
        let newDisplay;
        if(e.target.value =="="){
        newDisplay = eval(this.state.display)
        }
        
        else{
        newDisplay = `${this.state.display}${e.target.value}`;
        }
        this.setState({
            display: newDisplay
        })
    }  

    render(){
        return(<div>
               <h2>CALCULATOR</h2>
               <input type="text" value={this.state.display}></input>
               <h3>OPERANDS</h3>
            {
              number.map((num)=>{
                return(<input type="button" value={num} onClick={this.handlenoclick}></input>)
                })
            }
            <h3>SELECT OPERATOR</h3>
            {
               operator.map((operator)=>{
                return(<input type="button" value={operator} onClick={this.handleoperatorclick}></input>)
                })
            }
        </div>)
    }
    
}
export default Calculator
import React from 'react'

class Splitapp extends React.Component{
    constructor(){
        super();
        this.state={
        amount: '',
        number: '',
        res: ''
        }
    }
    handleamountEnter=(e)=>{
        this.setState({
            amount: e.target.value
        })

    }
    handlenumberEnter=(e)=>{
        this.setState({
            number: e.target.value
        })
    }
    handleClick=()=>{
        const{amount,number}=this.state

        this.setState({
            res: amount/number
            
        })

    }

    render(){ const{res}=this.state;
    console.log(this.amount, this.number)
        return(
        <div>
            <h2>SPLIT APPLICATION .....dont fight just use me </h2>
            "Enter Amount"
            <input type="text" value={this.state.amount} onChange={this.handleamountEnter}></input>
            <h2></h2>
            "Enter no of people: "
            <input type="text" value={this.state.number} onChange={this.handlenumberEnter}></input>
            <h2></h2>
            <input type="button" value="CALCULATE" onClick={this.handleClick}></input>
            <h2>{res}</h2>
            
        </div>)
    }

}export default Splitapp;
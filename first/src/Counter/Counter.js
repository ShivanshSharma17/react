import React from 'react';
import Display from '../Display/Display';
import Todo from '../Todo/todo';

class Counter extends React.Component {
    constructor() {
        super();
        this.state={
            count: 0,
            text: ""
        };
    }
    handleIncrement = () => {
        this.setState({
            count: this.state.count+1
        });
    }
    handleDecrement = () => {
        this.setState({
            count: this.state.count-1
        })
    }
    handletyping = (e) => {
        console.log(e.target.value)
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div>
               {this.state.count}
               <input type="button" value="Increment" onClick={this.handleIncrement}/>
               <input type="button" value="Decrement" onClick={this.handleDecrement}/>
               <input type="Text" value={this.state.text} id="id" onChange={this.handletyping}></input>
               <p>You typed {this.state.text}</p>
                <Display></Display>
                <Todo></Todo>
            </div>
        )
    }
}

export default Counter;
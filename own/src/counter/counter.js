import React from "react"

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count: 0

      }
   }
   handleclickinc=()=>{
       this.setState({
           count: this.state.count+1
       })
   }
   handleclickdec=()=>{
       this.setState({
           count: this.state.count-1
       })
   }
    render(){
        return(<div>
             <h2>My First App</h2> 
        <h4>{this.state.count}</h4>   
            <input type="button" value= "add" onClick={this.handleclickinc}></input>
            <input type="button" value="subtract" onClick={this.handleclickdec}></input>
        </div>)
    }
}
export default Counter
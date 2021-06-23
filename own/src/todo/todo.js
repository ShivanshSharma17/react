import React from "react"
import { render } from "react-dom";

class Todo extends React.Component{
    constructor(){
        super();
        this.state={
            text: " ",
            todolist: [],
            completedlist: []
        }
    }
    handletyping=(e)=>{
        this.setState({
            text: e.target.value
        });
    }
    handleclick=()=> {
        console.log("in method click")
        const {text,todolist}=this.state;
        const newtodolist=[...todolist,text]

        this.setState({
            text: "",
            todolist: newtodolist
        });
    }
    handlecheckbox=(todos)=>{
        const {todolist,completedlist}=this.state;
        const newCompletedlist=[...completedlist,todos];
        const newtodolist=todolist.filter((item)=>{
            return item!=todos
        });  
        this.setState({       //ek tarah se hum phir se declare ie update kar rahe hain
            completedlist: newCompletedlist,
            todolist: newtodolist
        })
    }
    render(){
        console.log(this.state.todolist, this.state.completedlist)
    return(<div>
        <h2>TODO APPLICATION</h2>

        <input type="text" value={this.state.text} onChange={this.handletyping} ></input>
        <input type="button" value="add" onClick={this.handleclick}></input>
        {
            this.state.todolist.map((todos)=>{
                return(<div>
                    {<input type="checkbox" onClick={()=>this.handlecheckbox(todos)}></input>}
                    {todos}
                </div>)
            }

            )
        }
        <h2>COMPLETED LIST</h2>
        {

            this.state.completedlist.map((completed)=>{
                return(
                    <div>
                        {completed}
                    </div>
                )
            }

            )
        }
    </div>
        
    )
}
}
export default Todo

import React from 'react';


class Todo extends React.Component{
    constructor(){
        super();
        this.state={
            text: "",
            todolist: [],
            completedList: []
        };
    }
    handletype=(e)=>{
        this.setState({
            text: e.target.value

        })
    }
    handleclick=()=>{
        const{text,todolist}=this.state        //here hum jo add button se likha hua add kar rahe hain wo kahan
        const newtodolist=[...todolist,text]  //jaana chahiye .......usko humne bheja ek new to do list bana k
        this.setState({                      //uske andar ye jo ...operator hai spread operator se todolist m jo 
            text: "",                       //wo add kia then jo text handletype se mila usko bhi le lia array main
            todolist: newtodolist

        })
    }
    handleCheckBoxClick=(todos)=>{   //here hum chahte hain k jab checbox main click ho to wo wahan se hat kar  completed waale main chale jaaye
        console.log(todos)        //dekhne k liye console mein
        const {completedList, todolist}=this.state;
        const newCompletedList = [...completedList,todos];
        const newTodosList = todolist.filter((item)=>{ //jo bhi dono main honge wo nahi lenge
            return item !=todos
        })
        this.setState({                         //yahan ek tarah se dubara initialize kar rahe hain or update kar
            completedList: newCompletedList,   //rahe hain after operation
            todolist: newTodosList
        })
    }
    render(){
        console.log(this.state.todolist)
        return(
            <div>
                todo app
                <input type="text" value={this.state.text } onChange={this.handletype}></input>
                <input type="button" value="add" onClick={this.handleclick}></input>
                <h4>Todos items</h4>
                {
                    this.state.todolist.map((todos)=>{//yahan se humjo todo list m daala wo dikha re
                        return (<div> 
                            {/* jo checkbox hai wo ye karega k jo todo m items honge uske aage box aayega */}
                            <input type ="checkbox" onClick={()=>this.handleCheckBoxClick(todos)}></input>
                           {todos} 
                        </div>)
                    })

                }
                <h4>Completed Items</h4>
                {
                    this.state.completedList.map((completed)=>{
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
export default Todo;

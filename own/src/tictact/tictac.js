import React from "react"
import './tictac.css';

class Tictac extends React.Component{
    constructor(){
        super();
        this.state={
        box: ["","","","","","","","",""],
        playeroneturn: true,
        result: ''
        }
    }
    handleclick=(index)=>{
       // console.log(index)
        const{box,playeroneturn}=this.state; //destructuring
        let newbox=[...box]
        if(playeroneturn){
            newbox[index] = "X"
        }
        else
        newbox[index] = "O"

       // console.log(newbox)
         this.setState({
             box: newbox,
             playeroneturn: !playeroneturn
         },()=>this.checkWin()
         )

    }
    checkWin=()=>{
        let result='';
    if(this.checkRow()!=''){
        result=`${this.checkRow()=='X'?'player 1':'player 2'} won !!`
    }
    else if (this.checkdiagonal()!=''){
        result=`${this.checkdiagonal()=='X'?'player 1':'player 2'} won !!`
    }
    else if (this.checkcol()!=''){
        result=`${this.checkcol()=='X'?'player 1':'player 2'} won !!`
    }
    this.setState({
        result
    })

    }

    checkRow=()=>{
        const {box}=this.state
        let result='';
     
        if(box[0]==box[1]&&box[1]==box[2])
        result=box[0];
        else if(box[3]==box[4]&&box[4]==box[5])
        result=box[3];
        else if(box[6]==box[7]&&box[7]==box[8])
        result=box[6];
        console.log(result)
    return result;
    }
    checkdiagonal=()=>{
        const {box}=this.state
        let result='';
        if(box[0]==box[4]&&box[4]==box[8]||box[2]==box[4]&&box[4]==box[6])
        result=box[4]; //as 4 is common
        return result;
    }
    checkcol=()=>{ 
        const {box}=this.state
        let result='';
        if(box[0]==box[3]&&box[3]==box[6])
        result=box[0];
        else if(box[1]==box[4]&&box[4]==box[7])
        result=box[1];
        else if(box[2]==box[5]&&box[5]==box[8])
        result=box[2];
        console.log(result)
    return result;

    }
    render(){
        const {box,result}=this.state
        return(<div> <h2>PLAY HERE</h2>
       
        <div className="container">
           
        {
               box.map((value, index)=>{
                    return(<input
                    className='largeButton'
                    type="button"
                    disabled={value=='X'||value=='O'||result!=''}
                    value={value}
                    onClick={()=>this.handleclick(index)}>
                    </input>
                    
                   )
               }) 
        }
        
        </div>
        {result}
        </div>)
    }

   
}
export default Tictac;
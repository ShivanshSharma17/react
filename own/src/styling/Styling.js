import React from 'react';
import './style.css';
class Styling extends React.Component {
    render(){
        return(<React.Fragment>
            <p>this is text</p>

            <div id="content">
                hello shinching i m here 
                minching
            
            </div>
            <h3 class="colorGreen">
                Swachch ye Rishikesh rahe !!
            </h3>
            <p class="inlinedemo" style= {{color: "red"} }>
                This is the method for checking inline demo
            </p>
        </React.Fragment>)
       
    }
}
export default Styling;
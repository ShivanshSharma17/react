import React from 'react';
const allstate=['Delhi','UP','Punjab','Uttrakhand','Kerela']
const alphabet= /^[A-Za-z]+$/;
const number=/^[0-9]+$/;
const alphanumeric=/^[A-Za-z0-9]+$/;

class Loginpage extends React.Component{
    
    constructor(){
        super();
        this.state={
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            stateselected:'',
            pincode: '',
            phone: '',
            email: '',
            gender: '',
            Previewstate: false,
            firstnameerror: '',
            lastnameerror: '',
            phonenoarror: '',
            pincodeerror: '',
            cityerror:'',

        }
       
    }
    handlefirstname=(e)=>{
        const newvalue=e.target.value;

        if(alphabet.test(newvalue) && newvalue.length<20){
            this.setState({
                firstname: newvalue,
                firstnameerror: '',
            });
        }
        else{
            let err = "NAME SHOULD ONLY CONTAIN ALPHABETS";
            if(newvalue.length>20) {
                err = "length exceeds";
            }
            this.setState({
                firstnameerror:  err
            });
        }
       
    }
    handlelastname=(e)=>{
        const newlastname=e.target.value;
        if(alphabet.test(newlastname) && newlastname.length<=20){
            this.setState({
                lastname: e.target.value,
                lastnameerror: '',
            })
        }else{
            let err = "NAME SHOULD ONLY CONTAIN ALPHABETS";
            if(newlastname.length>20)
                err= "Limit exceeds";
            
                this.setState({
                    lastnameerror: err
                });
        }
    }
    handleaddress=(e)=>{
        this.setState({
            address: e.target.value
        })
    }
    handlecity=(e)=>{
        const newcity= e.target.value
        if(alphanumeric.test(newcity)){
            this.setState({
                city: e.target.value,
                cityerror: '',
            })
        }
        else{
            this.setState({
                cityerror: "SPECIAL CHARACTERS NOT ALLOWED"
            })
        }
    }
    handlestate=(e)=>{
        console.log(e.target.value)
        this.setState({
            stateselected: e.target.value
        })
    }
    handlepincode=(e)=>{
        const newpincode= e.target.value
        if(number.test(newpincode)){
        this.setState({
            pincode: e.target.value,
            pincodeerror: '',
        })
    }
    else{
        this.setState({
            pincodeerror: "PLEASE ENTER THE VALID CODE"
        })
    }
    }
    handlephone=(e)=>{
        const newnumber=e.target.value;
        if(number.test(newnumber)){
            this.setState({
                phone: e.target.value,
                phonenoarror: '',
            })
        }
        else{
            this.setState({
                phonenoarror: "PLEASE ENTER A VALID NO"
            })
        }
        
    }
    handlemail=(e)=>{
        this.setState({
            email: e.target.value
        })
    }
    handlegender=(e)=>{
        console.log(e.target.value)
        this.setState({
            gender: e.target.value
        })
    }
    handlePreviewState=()=>{
        this.setState({
            Previewstate: true
        })
    }
    render(){
        const {
            firstname,
            lastname,
            address,
            city,
            stateselected,
            pincode,
            phone,
            email,
            gender,
            Previewstate,
            firstnameerror,
            lastnameerror,
            pincodeerror,
            phonenoarror,
            cityerror,
         }=this.state
        return(<div>
            <h3>LOGIN FORM FOR HIRING</h3>
            <table border="1">
                <tr>
                    <td>
                        FIRST NAME:
                        <input
                            type="text"
                            value={this.firstname}
                            onChange={this.handlefirstname}>
                        </input>
                          <p>{firstnameerror}</p>
                    </td>
                    <td>LAST NAME:
                        <input type='text'
                        value={this.lastname} 
                        onChange={this.handlelastname}>
                            </input>
                            <p>{lastnameerror}</p>
                            </td>
                </tr>
                <tr>
                    <td>ADDRESS:   <input  type="textarea"
                       value={this.address}
                       onChange={this.handleaddress}>
                          </input>
                    </td>
                    <td>
                        PINCODE: <input type="text"
                         value={pincode} 
                         onChange={this.handlepincode}>
                        </input>
                     <p>{pincodeerror }</p>
                    </td>
                </tr>
                <tr>
                    <td>CITY: <input type="text"
                     value={city} 
                     onChange={this.handlecity}>
                         </input>
                         <p>{cityerror}</p>
                    </td>
                    <td>
                        STATES LIST:
                        <select onChange={this.handlestate}>
                            {
                                allstate.map((statelist)=>{
                                return(<option value={statelist}>{statelist}</option>)
                                })
                            }
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        PHONE NO: <input type="text" 
                        value={phone} 
                        onChange={this.handlephone}>
                        </input>
                        <p>{phonenoarror}</p>
                    </td>
                    <td>
                        Email: <input type="text"
                         value={email}
                         onChange={this.handlemail}>
                              </input> 
                    </td>
                </tr>
                <tr>
                <td onChange={this.handlegender}>
                        Gender:
                         <input type='radio' name="gender" value='Male' ></input> Male
                         <input type='radio' name="gender" value='female'></input> female
                         <input type='radio' name="gender" value='other'></input> Other
                    </td>
                </tr>
                <tr>
                        <input type='button'
                        value='SUBMIT'
                        onClick={this.handlePreviewState} >
                        </input>
                </tr>
            </table>
           {/* //here kar rahe hain k if Previewstate is true ie if clicked ye WINDOW khul jaaye braces lagana
           //jarroori since we are using javascript here */}
          {

           Previewstate && <table> <h3>PREVIEW WINDOW</h3>
            <tr>
                <td>
                   <h4>
                       NAME: {firstname} {lastname}
                   </h4>
                </td> 
            </tr>
            <tr>
                <td>
                    <h4>
                         ADDRESS: {address}
                    </h4>
                </td>
            </tr>
            <tr>
                <td>
                    <h4>
                    CITY: {city}   STATE: {stateselected}
                    </h4>
                </td>
            </tr>
            <tr>
                <td>
                    <h4>
                    PHONE:{phone} EMAIL:{email}
                    </h4>
                </td>
            </tr>
            <tr>
                <td>
                    <h4>
                    GENDER: {gender}
                    </h4>
                </td>
            </tr>
        </table>
    }
            
        </div>

    )}
}export default Loginpage;

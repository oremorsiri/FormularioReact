import React from "react";
import Axios from "axios";
import {isEmail} from "validator" ;
import "./Register.css";

class Register extends React.Component {  // Componente de clase
     
    constructor(props) {
        super(props);
        this.state= {
            name:"",
            lastname:"",
            email:"",
            password:"",
            validForm:true,
            errorName:"",
            errorLastname:"",
            errorEmail:"",
            errorPassword:""
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();    
        this.validateForm();
        if(!this.state.validForm)return
        this.setState({
            name:event.target.name.value,
            lastname:event.target.name.value,
            email:event.target.email.value,
            password:event.target.password.value,
        },()=>{
            Axios.post("http://localhost:3001/users/register/", this.state).then(res=>res.data)
        })
    }

    validateForm=()=>{
        this.validateName();
        this.validateLastName();
        this.validateEmail();
        this.validatePassword()
    }

    validateName= () => {
        if(this.state.name.length === 0) {
            console.log("Hola")
            this.setState({
                validForm: false, 
                errorName: "I'm trying to be nice but I need your name"
            });
            return;
        }else if(this.state.name.length > 40) {
            console.log("Holaaaaaaaaaaaaaaaaaaaaa") 
            this.setState({
                validForm: false, 
                errorName: "Do you have a *shorter* nickname?"
            });
            return;
        }this.setState({errorName:"", validForm:true})
    }

    validateLastName= () => {
        if(this.state.lastname.length === 0) {
            console.log("Holita")
            this.setState({
                validForm: false, 
                errorLastname: "You do have a lastname right?"
            });
            return;
        }else if(this.state.lastname.length > 40) {
            console.log("Holitaaaaaaaaaaaaaaaaaaaaa") 
            this.setState({
                validForm: false, 
                errorLastname: "Not judging but that's too long"
            });
            return;
        }this.setState({errorLastname:"", validForm:true})
    }

    validateEmail= () => {
        if(this.state.email.length === 0) {
            console.log("Qué tal?")
            this.setState({
                validForm: false, 
                errorEmail: "I'm asking nicely, I do require your email"
            });
            return;
        }
        else if(!isEmail(this.state.email)) {
            console.log("Bien") 
            this.setState({
                validForm: false, 
                errorEmail: "Check your email, something is wrong"
            });
            return;
        }
        this.setState({errorEmail:"", validForm:true})
    }

     validatePassword= () => {
         if(this.state.password.length === 0) {
            console.log("Adios")
            this.setState({
                validForm: false, 
                errorPassword: "Seriously, you need a password"
            });
            return;
        } 
        else if(this.state.password.length < 8) {
            console.log("Hasta otra")
            this.setState({
                validForm: false,
                errorPassword: "Not unicorn blood, just 8 characters"
            });
            return;
     }
     this.setState({errorPassword:"", validForm:true})
    }
    

    handleChange=event=>this.setState({[event.target.name]:event.target.value});

    render() {
        return (
            <div className="registerDiv">
                <h1 className="registertitle">Register:</h1>
                <form className="register" onSubmit={this.handleSubmit}>
                    <div className="ErrorInputsDiv">
                        <input type="text" name="name" placeholder="What's your name?" onChange={this.handleChange} value={this.state.name}/>
                
                        <div className="errormsg">{this.state.errorName}</div>
                    </div>
                    <div className="ErrorInputsDiv">
                        <input type="text" name="lastname" placeholder="And your lastname?" onChange={this.handleChange} value={this.state.lastname}/>

                        <div className="errormsg">{this.state.errorLastname}</div>
                    </div>
                    <div className="ErrorInputsDiv">
                        <input type="text" name="email" placeholder="Can I have your email?" onChange={this.handleChange} value={this.state.email}/>
                
                        <div className="errormsg">{this.state.errorEmail}</div>
                    </div>
                    <div className="ErrorInputsDiv">
                        <input type="password" name="password" placeholder="You're going to need a password" onChange={this.handleChange} value={this.state.password}/>
                
                        <div className="errormsg">{this.state.errorPassword}</div>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                {/* //* {this.state.email} */}
            </div>
        )

    }
}



// const Register = (props) => (
//     <div>
//         Register
//     </div>
// ) // Componente funcional (no tiene estado)

export default Register;
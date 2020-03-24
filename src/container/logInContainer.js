import React, { Component } from 'react';
import UserDAO from '../models/userDAO';
import LogInComponent from '../components/logInComponent';



export default class LogInContainer extends Component{
  constructor(props){
    super(props);
    this.state={
     email:"",
     password:"",
     message:"",
    }
    this.onEmailChange=this.onEmailChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);
    this.onClick=this.onClick.bind(this);

  }
  onEmailChange(event){
    this.setState({
      message: "",
      email: event.target.value
    })
  }
  onPasswordChange(event){
    this.setState({
      message: "",
      password: event.target.value
    })
  }
  onClick(event){
    event.preventDefault();
    const {email, password }= this.state;
    const dao = new UserDAO;
    const userObj= dao.auth(email,password);
    if(userObj){
      this.props.history.push('/dashboard')
    }
    else{
      this.setState({
        message: "Email/PAssword wrong! please try agian"
      })
    }

  }


    render() {
        const { email, password, message } = this.state;
        const { onEmailChange, onPasswordChange, onClick } = this;
        return (
            <div>
                <LogInComponent
                    email={email}
                    onEmailChange={onEmailChange}
                    password={password}
                    onPasswordChange={onPasswordChange}
                    onClick={onClick}
                    message={message}
                />
            </div>
        );
    }
}

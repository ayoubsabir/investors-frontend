import React, { Component } from 'react';
import UserDAO from '../models/userDAO';
import UserCreateView from '../components/userCreateView';

export default class UserCreateController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value, });
    }
    onPasswordChange(event) {
        this.setState({ password: event.target.value, });
    }
    onFirstNameChange(event) {
        this.setState({ firstName: event.target.value, });
    }
    onLastNameChange(event) {
        this.setState({ lastName: event.target.value, });
    }
    onClick(event) {
        event.preventDefault();
        const { email, password, firstName, lastName, } = this.state;
        const userDAO = new UserDAO();
        userDAO.addObject(email, password, firstName, lastName,);
        alert("You have succssessfully registered");
        this.props.history.push("/LogIn");
    }
    render() {
        const { email, password, firstName, lastName, } = this.state;
        const { onEmailChange, onPasswordChange, onFirstNameChange, onLastNameChange, onClick } = this;
        return (
            <div>
                <UserCreateView
                    email={email}
                    onEmailChange={onEmailChange}
                    password={password}
                    onPasswordChange={onPasswordChange}
                    firstName={firstName}
                    onFirstNameChange={onFirstNameChange}
                    lastName={lastName}
                    onLastNameChange={onLastNameChange}
                    onClick={onClick}
                />
            </div>
        );
    }
}

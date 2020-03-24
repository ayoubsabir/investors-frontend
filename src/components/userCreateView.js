import React, { Component } from 'react';

export default function UserCreateView(props){
    const {
        email, onEmailChange,
        password, onPasswordChange,
        firstName, onFirstNameChange,
        lastName, onLastNameChange,
        onClick,
    } = props;
    return (
        <div><center>
            <h1>Register</h1>
            <p>Email:</p> &nbsp; &nbsp; &nbsp;<input
                placeholder="Email"
                value={email}
                onChange={ (event)=>onEmailChange(event) }
                type="email"
            />
            <br /><br />
            <p>Password:</p> &nbsp; &nbsp; &nbsp;<input
                placeholder="Password"
                value={password}
                onChange={ (event)=>onPasswordChange(event) }
                type="password"
            />
            <br /><br />
            <p>First name:</p> &nbsp; &nbsp; &nbsp;<input
                placeholder="First Name"
                value={firstName}
                onChange={ (event)=>onFirstNameChange(event) }
                type="text"
            />
            <br /><br />
            <p>Last name:</p> &nbsp; &nbsp; &nbsp;<input
                placeholder="Last Name"
                value={lastName}
                onChange={ (event)=>onLastNameChange(event) }
                type="text"
            />
            <br /><br />
            <button onClick={ (event)=>onClick(event) }>Save</button></center>
        </div>
    );
}

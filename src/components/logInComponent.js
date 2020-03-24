import React, { Component } from 'react';

export default function LogInComponent(props){
    const {
        email, onEmailChange,
        password, onPasswordChange,
        onClick, message,
    } = props;
    return (
        <div><center>
            <h1>Log in</h1>
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
                <p><strong>{message}</strong></p>
            <br /><br />
            <button onClick={ (event)=>onClick(event) }>Submit</button></center>
        </div>
    );
}

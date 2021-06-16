import React from 'react';
import { useState } from "react";

const SignInForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className = "sign-in-div">
            <form className = "sign-in-form">
                <h1>Login</h1>
                <input type = "username" placeholder = "Username" value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
                <input type = "password" placeholder = "Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
                <input type = "submit" value="Login" />
            </form>
            
        </div>
    );
}

export default SignInForm;

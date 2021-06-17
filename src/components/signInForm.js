import React from 'react';
import { useState } from "react";

const SignInForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    

    return (
        <div className = "sign-in-div">
            <form className = "sign-in-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type = "text" placeholder = "Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
                <input type = "password" placeholder = "Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
                <input type = "submit" value="Login" />
            </form>
            
        </div>
    );
}

export default SignInForm;

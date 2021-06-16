import React from 'react';

const SignInForm = () => {
    return (
        <div className = "sign-in-div">
            <form className = "sign-in-form">
                <h1>Login</h1>
                <input type = "username" placeholder = "Username" /><br></br>
                <input type = "password" placeholder = "Password" /><br></br>
                <input type = "submit" value="Login" />
            </form>
            
        </div>
    );
}

export default SignInForm;

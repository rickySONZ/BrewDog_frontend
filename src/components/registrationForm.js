import React, { useState} from 'react';


const RegistrationForm = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          })
    }
    
    
    return (
        <div>
            <form className= "reistration-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input type = "text" placeholder = "Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
            <input type = "text" placeholder = "Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
            <input type = "password" placeholder = "Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
            <input type = "password" placeholder = "Confirm Password" name="password-confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br></br>
            <input type = "submit" value = "Sign Up"/>
            </form>
        </div>
    );
}

export default RegistrationForm;

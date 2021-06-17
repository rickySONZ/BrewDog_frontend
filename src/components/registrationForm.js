import { connect } from 'react-redux';
import { userPostFetch } from '../actions/auth';
import React, { Component } from 'react';

class RegistrationForm extends Component {

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userPostFetch(this.state)
    }
    render() {
        return (
            <div>
            <form className= "reistration-form" onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <input type = "text" placeholder = "Username" name="username" value={this.username} onChange={this.handleChange}/><br></br>
            <input type = "text" placeholder = "Email" name="email" value={this.email} onChange={this.handleChange}/><br></br>
            <input type = "password" placeholder = "Password" name="password" value={this.password} onChange={this.handleChange}/><br></br>
            {/* <input type = "password" placeholder = "Confirm Password" name="password_confirmation" value={this.passwordConfirmation} onChange={this.handleChange}/><br></br> */}
            <input type = "submit" value = "Sign Up"/>
            </form>
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(RegistrationForm);

import { connect } from 'react-redux';
import { userPostFetch } from '../actions/auth';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
            <div className="registration-div">
            <form className= "registration-form" onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <input type = "text" placeholder = "Username" name="username" value={this.username} onChange={this.handleChange}/><br></br>
            <input type = "text" placeholder = "Email" name="email" value={this.email} onChange={this.handleChange}/><br></br>
            <input type = "password" placeholder = "Password" name="password" value={this.password} onChange={this.handleChange}/><br></br>
            <input type = "submit" value = "Sign Up"/>
            </form>
            <Link to="/login">Already Have an Account?<br></br>Click Here to Sign Up</Link>
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

const mapStateToProps = (state) => {
    return ({current_user: state.signInR.current.current_user})
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

import { userLoginFetch } from '../actions/auth'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class SignInForm extends Component {

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userLoginFetch(this.state)
    }
    render() {
        return (
            <div className="sign-in-div">
                <form className = "sign-in-form" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <input type = "text" placeholder = "Username" name="username" value={this.password} onChange={this.handleChange}/><br></br>
                    <input type = "password" placeholder = "Password" name="password" value={this.password} onChange={this.handleChange}/><br></br>
                    <input type= "submit" value = "Login"></input>
                </form>
                <Link to="/register">Dont' Have An Account?<br/>Register Here</Link>

            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

const mapStateToProps = (state) => {
    return ({currentUser: state.signInR.currentUser})
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);

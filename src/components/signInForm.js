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
        console.log('a')
        this.props.userLoginFetch(this.state)
        console.log('b')
    }
    render() {
        return (
            <div className="sign-in-div">
            <h1><img id="nav-link-logo" src={process.env.PUBLIC_URL + '/kisspng-beer-brewing-grains-malts-india-pale-ale-bitter-underdog-5b3160d5c657c4.2574535915299627098124.jpg'}/>BrewDog</h1>
                <form className = "sign-in-form" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <input type = "text" placeholder = "Username" name="username" value={this.username} onChange={this.handleChange}/><br></br>
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

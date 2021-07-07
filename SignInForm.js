import { removeError, userLoginFetch } from '../actions/auth'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';



class SignInForm extends Component {

    componentWillUnmount = () => {
        this.props.removeError()
    }
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
        if(this.props.error && this.props.error.length > 0){
        return (
            <div className="sign-in-div">
            <h1><img id="nav-link-logo" src={process.env.PUBLIC_URL + '/kisspng-beer-brewing-grains-malts-india-pale-ale-bitter-underdog-5b3160d5c657c4.2574535915299627098124.jpg'}/>BrewDog</h1>
                <form className = "sign-in-form" onSubmit={this.handleSubmit}>             
  <Alert key={Math.random(100000)} severity="error"  style={{width:'20%', justifyContent:'center', marginLeft: '39%'}}>
    {String(this.props.error)}
  </Alert>
                    <h1>Login</h1>
                    <input type = "text" placeholder = "Username" name="username" value={this.username} onChange={this.handleChange}/><br></br>
                    <input type = "password" placeholder = "Password" name="password" value={this.password} onChange={this.handleChange}/><br></br>
                    <input type= "submit" value = "Login"></input>
                </form>
                <Link to="/register">Dont' Have An Account?<br/>Register Here</Link>
                
            </div>
        )} else {
            return(
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
            )
        }
    }
}
let mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo)),
    removeError: () => dispatch(removeError())
})

let mapStateToProps = (state) => {
    return ({currentUser: state.signInR.currentUser,
    error: state.signInR.error})
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);

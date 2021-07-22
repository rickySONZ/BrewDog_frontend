import { connect } from 'react-redux';
import { removeError, userPostFetch } from '../actions/auth';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';


class RegistrationForm extends Component {

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
        this.props.userPostFetch(this.state)
    }
    render() {
        if (this.props.error && this.props.error.length > 0) {
            return (
                <div className="registration-div">
                    <h1><img id="nav-link-logo" src={process.env.PUBLIC_URL + '/kisspng-beer-brewing-grains-malts-india-pale-ale-bitter-underdog-5b3160d5c657c4.2574535915299627098124.jpg'} />BrewDog</h1>
                    <form className="registration-form" onSubmit={this.handleSubmit}>
                        <h1>Sign Up</h1>
                        <Alert severity="error" style={{ width: '40%', margin: 'auto' }} className="user-alerts">
                            {String(this.props.error)}
                        </Alert>
                        <input type="text" placeholder="Username" name="username" value={this.username} onChange={this.handleChange} /><br></br>
                        <input type="text" placeholder="Email" name="email" value={this.email} onChange={this.handleChange} /><br></br>
                        <input type="password" placeholder="Password" name="password" value={this.password} onChange={this.handleChange} /><br></br>
                        <input type="submit" value="Sign Up" />
                    </form>
                    <Link to="/login">Already Have an Account?<br></br>Click Here to Sign Up</Link>
                </div>
            )
        }
        else {
            return (
                <div className="registration-div">
                    <h1><img id="nav-link-logo" src={process.env.PUBLIC_URL + '/kisspng-beer-brewing-grains-malts-india-pale-ale-bitter-underdog-5b3160d5c657c4.2574535915299627098124.jpg'} />BrewDog</h1>
                    <form className="registration-form" onSubmit={this.handleSubmit}>
                        <h1>Sign Up</h1>
                        <input type="text" placeholder="Username" name="username" value={this.username} onChange={this.handleChange} /><br></br>
                        <input type="text" placeholder="Email" name="email" value={this.email} onChange={this.handleChange} /><br></br>
                        <input type="password" placeholder="Password" name="password" value={this.password} onChange={this.handleChange} /><br></br>
                        <input type="submit" value="Sign Up" />
                    </form>
                    <Link to="/login">Already Have an Account?<br></br>Click Here to Sign Up</Link>
                </div>
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo)),
    removeError: () => dispatch(removeError())
})

const mapStateToProps = (state) => {
    return ({
        current_user: state.signInR.current.current_user,
        error: state.signInR.error
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

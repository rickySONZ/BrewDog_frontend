import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import SignInForm from './components/SignInForm';
import RegistrationForm from './components/RegistrationForm';
import { getBreweries } from './actions/brewery';
import { useEffect } from 'react';
import { getProfileFetch } from './actions/auth'
import Home from './components/Home';


function App(props) {


  useEffect(() => {
    props.getBreweries()
    props.getProfileFetch()
    
    return () => {

    };
  }, []);

  return (
    <Router>
    <div className="App">
    <Route exact path="/" component = {Home}>
    {props.currentUser && props.currentUser.logged_in ? <Home/> : <SignInForm />}
    </Route>
      <Route exact path="/login" >
        {props.currentUser && props.currentUser.logged_in ? <Redirect to="/" /> : <SignInForm />}
      </Route>
      <Route exact path="/register" component={RegistrationForm}>
      {props.currentUser && props.currentUser.logged_in ? <Redirect to="/" /> : <RegistrationForm />}
      </Route>

    </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return ({breweries: state.breweriesR.breweries,
            loading: state.breweriesR.loading,
            currentUser: state.signInR.currentUser
        }) 
}

const mapDispatchToProps = dispatch => ({
  getBreweries: () => dispatch(getBreweries()),
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

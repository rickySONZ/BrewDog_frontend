import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import SignInForm from './components/SignInForm';
import RegistrationForm from './components/RegistrationForm';
import { getBreweries } from './actions/brewery';
import { useEffect } from 'react';
import { getProfileFetch } from './actions/auth'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Favorites from './components/Favorites';



function App(props, state) {

  let isLoggedIn = localStorage.user_id || props.currentUser

  useEffect(() => {
    props.getProfileFetch()
    props.getBreweries()
    
    
    return () => {
      
    };
  }, []);

  return (
    <Router>
    {isLoggedIn ? <Navbar/> : null}
    <div className="App">
    <Switch>
    <Route exact path ={`/users/${props.currentUser}/favorites`}>
      {isLoggedIn ? <Favorites/> : <Redirect to="/login"/>}
      </Route>
    <Route exact path="/" component = {Home}>
    {isLoggedIn ? <Home/> : <SignInForm />}
    </Route>
      <Route exact path="/login" >
        {isLoggedIn ? <Redirect to="/" /> : <SignInForm />}
      </Route>
      <Route exact path="/register" component={RegistrationForm}>
      {isLoggedIn ? <Redirect to="/" /> : <RegistrationForm />}
      </Route>
</Switch>
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

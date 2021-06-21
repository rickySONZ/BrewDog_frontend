import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import SignInForm from './components/SignInForm';
import RegistrationForm from './components/RegistrationForm';
import { getBreweries } from './actions/brewery';
import { useEffect } from 'react';
import { getProfileFetch } from './actions/auth'
import Home from './components/Home';
import Navbar from './components/Navbar'


function App(props) {

  const isLoggedIn = props.currentUser && props.currentUser.logged_in

  useEffect(() => {
    props.getBreweries()
    props.getProfileFetch()
    
    return () => {

    };
  }, []);

  return (
    <Router>
    {isLoggedIn ? <Navbar/> : null}
    <div className="App">
    <Route exact path="/" component = {Home}>
    {isLoggedIn ? <Home/> : <SignInForm />}
    </Route>
      <Route exact path="/login" >
        {isLoggedIn ? <Redirect to="/" /> : <SignInForm />}
      </Route>
      <Route exact path="/register" component={RegistrationForm}>
      {isLoggedIn ? <Redirect to="/" /> : <RegistrationForm />}
      </Route>
      <Route exact path ={`/users/${localStorage.user_id}/favorites`}>
      {isLoggedIn ? <Favorites/> : <SignInForm/>}
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

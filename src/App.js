import './App.css';
import { connect, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import SignInForm from './components/SignInForm';
import RegistrationForm from './components/RegistrationForm';
import { getBreweries } from './actions/brewery';
import { useEffect } from 'react';
import { getProfileFetch } from './actions/auth'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Favorites from './components/Favorites';
import { getFavorites } from './actions/favorite';


function App(props) {

  const dispatch = useDispatch()

  let isLoggedIn = props.currentUser && props.currentUser.id

  useEffect(() => {
    dispatch(getProfileFetch())
    dispatch(getBreweries())
    return () => {    
    };
  }, []);

  return (
    <Router>
    {isLoggedIn ? <Navbar/> : null}
    <div className="App">
    <Switch>
    <Route path ={`/users/:id/favorites`}>
      {isLoggedIn ? <Favorites/> : <Route exact path ="/login"><SignInForm/></Route>}
      </Route>
      <Route exact path="/login" >
        {isLoggedIn ? <Redirect to="/" /> : <SignInForm />}
      </Route>
      <Route exact path="/register">
      {isLoggedIn ? <Redirect to="/" /> : <RegistrationForm />}
      </Route>
      <Route path="/">
    {isLoggedIn ? <Home/> : <Redirect to="/login" />}
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

export default connect(mapStateToProps, null)(App);

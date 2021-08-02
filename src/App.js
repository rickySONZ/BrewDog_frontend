import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import SignInForm from './components/SignInForm.js';
import RegistrationForm from './components/RegistrationForm.js';
import { getBreweries } from './actions/brewery.js';
import { useEffect } from 'react';
import { getProfileFetch } from './actions/auth.js'
import Home from './components/Home.js';
import Navbar from './components/Navbar.js'
import Favorites from './components/Favorites.js';
import Background from './images/brewdog-background-img.jpg'




function App() {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.signInR.currentUser)

  let isLoggedIn = currentUser && currentUser.id

  useEffect(() => {
    dispatch(getProfileFetch())
    dispatch(getBreweries())
    return () => {
    };
  }, []);

  return (
    <Router>
      <div className="App"
        style={{
          backgroundImage: `url(${Background})`
        }}
      >
        <div className="grid-wrapper">
          {isLoggedIn ? <Navbar /> : null}
          <Switch>
            <Route path={`/users/:id/favorites`}>
              {isLoggedIn ? <Favorites /> : <Route exact path="/login"><SignInForm /></Route>}
            </Route>
            <Route exact path="/login" >
              {isLoggedIn ? <Redirect to="/" /> : <SignInForm />}
            </Route>
            <Route exact path="/register">
              {isLoggedIn ? <Redirect to="/" /> : <RegistrationForm />}
            </Route>
            <Route path="/">
              {isLoggedIn ? <Home /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default connect(null, null)(App);

import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux'
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
    
    <div className="App">
    <div className="grid-wrapper">
    {isLoggedIn ? <Navbar/> : null}
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
    </div>
    </Router>
  );
}

export default connect(null, null)(App);

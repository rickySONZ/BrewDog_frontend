import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignInForm from './components/SignInForm';
import RegistrationForm from './components/RegistrationForm';
import { getBreweries } from './actions/brewery';
import { useEffect } from 'react';
import { getProfileFetch } from './actions/auth'

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
      <Route exact path="/login" component={SignInForm} />
      <Route exact path="/register" component={RegistrationForm} />

    </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return ({breweries: state.breweriesR.breweries,
            loading: state.breweriesR.loading,
        })
}

const mapDispatchToProps = dispatch => ({
  getBreweries: () => dispatch(getBreweries()),
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

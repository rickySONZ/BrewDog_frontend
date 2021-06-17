import './App.css';
import { connect } from 'react-redux'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignInForm from './components/SignInForm';
import RegistrationForm from './components/RegistrationForm';

function App() {

  return (
    <Router>
    <div className="App">
      <Route exact path ="/" component={Home} />
      <Route exact path="/login" component={SignInForm} />
      <Route exact path="/register" componet={RegistrationForm} />

    </div>
    </Router>
  );
}

export default App;

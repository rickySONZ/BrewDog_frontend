import './App.css';
import { connect } from 'react-redux'
import { getBreweries } from './actions/brewery';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    getBreweries()
    return () => {
      console.log("unmounting")
    };
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default connect(null, { getBreweries })(App);

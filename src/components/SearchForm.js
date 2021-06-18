import React, { useState, setState } from 'react';
import { connect } from 'react-redux';


function SearchForm(props) {

    const [city, setCity] = useState('')
    const [stateUS, setStateUS] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        
    }


    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" value={city} placeholder="Search City" onChange={e => setCity(e.target.value)} />
                <input type="text" value={stateUS} placeholder="Search State" onChange={e => setStateUS(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return ({breweries: state.breweriesR.breweries,
    current_user: state.signInR.current_user})
}

export default connect(mapStateToProps)(SearchForm);

// Step 5 - Build out components
// Step 6 - import connect and set up mSTP

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getBrewery} from '../store/actions';

const Breweries = ({getBrewery, name, street, city, state, phone, isFetching}) => {
  useEffect(() => {
    getBrewery();
  }, [getBrewery])

  if(isFetching) {
    return <h2>Fetching Brewery!</h2>
  }

  return (
    <>
      <h2>Brewery: {name}</h2>
      <h2>Location: {street}{city}{state}</h2>
      <h2>Phone Number: {phone}</h2>
      <button onClick={getBrewery}>See Another Brewery</button>
    </>
  )
};

const mapStateToProps = state => {
  return {
    insult: state.insults,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getBrewery})(Breweries);
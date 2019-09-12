// Step 5 - Build out components
// Step 6 - import connect and set up mSTP

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getBrewery} from '../store/actions';

// {getBrewery, name, street, city, state, phone, isFetching}
const Breweries = (props) => {
  useEffect(() => {
    getBrewery();
  }, [props.getBrewery])

  if(props.isFetching) {
    return <h2>Fetching Brewery!</h2>
  }

  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.street} <br></br>{props.city}, {props.state}</h3>
      <h4>{props.phone}</h4>
      <button onClick={getBrewery}>See Another Brewery</button>
    </>
  )
};

const mapStateToProps = state => {
  return {
    brewery: state.breweries,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getBrewery})(Breweries);
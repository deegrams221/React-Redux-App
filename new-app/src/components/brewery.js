// Step 5 - Build out components
// Step 6 - import connect and set up mSTP

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getBrewery} from '../store/actions';

 
const Breweries = ({getBrewery, breweries, isFetching}) => {
  useEffect(() => {
    getBrewery();
  }, [getBrewery])

  if(isFetching) {
    return <h2>Fetching Breweries!</h2>
  }

  return (
    <div>
      <div>
        {breweries.map((brewery) => {
          return (
            <div>
              <h3>Brewery: {brewery.name}</h3>
              <p>Type of brewery: {brewery.brewery_type}</p>
              <p>{brewery.city}, {brewery.state}</p>
              <p>{brewery.website_url}</p>
            </div>
          );
        })}
      </div>
      {/* <button onClick={getBrewery}>Find New Brewery</button> */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log ('mSTP: ', state);
  return {
    breweries: state.breweries,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getBrewery})(Breweries);
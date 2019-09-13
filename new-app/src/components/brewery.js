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
    <div className="brewery-list">
      {breweries.map((brewery) => {
        return (
          <div role="list" class="ui divided relaxed list">
            <div role="listitem" class="item">
              <div class="content">
                <div class="header">Brewery: {brewery.name}</div>
              </div>
              <div class="content">
                <div class="meta">Type of brewery: {brewery.brewery_type}</div>
                <div class="description">
                  <p>{brewery.city}, {brewery.state}</p>
                  <p>{brewery.website_url}</p>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        );
      })}
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
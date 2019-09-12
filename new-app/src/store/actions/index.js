// Step 7 - Action Creators/Types
// Step 8 - import Axios and set up dispatch
//        axios.get(`https://api.openbrewerydb.org/breweries`)

import axios from 'axios';

// action types
export const FETCH_BREWERY_START = 'FETCH_BREWERY_START';
export const FETCH_BREWERY_SUCCESS = 'FETCH_BREWERY_SUCCESS';
export const FETCH_BREWERY_FAIL = 'FETCH_BREWERY_FAIL';

// action creators
export const getBrewery = () => {
  return dispatch => {
    // dispatch and axios request
    dispatch({type: FETCH_BREWERY_START});
    axios
      .get(`https://api.openbrewerydb.org/breweries/`)
      .then(res => {
        //console.log("axios request: ", res.data)
        dispatch({type: FETCH_BREWERY_SUCCESS, payload: res.data});
      })
      .catch(error => {
        //console.log("catch error: ", error.response);
        dispatch({
          type: FETCH_BREWERY_FAIL,
          payload: error.response
        });
      });
  };
};
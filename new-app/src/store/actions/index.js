// Step 7 - Action Creators/Types
// Step 8 - import Axios and set up dispatch
//        axios.get(`https://dog.ceo/api/breeds/image/random`)

import axios from 'axios';

// action types
export const FETCH_DOG_START = 'FETCH_DOG_START';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_FAIL = 'FETCH_DOG_FAIL';

// action creators
export const getDog = () => {
  return dispatch => {
    // dispatch and axios request
    dispatch({type: FETCH_DOG_START});
    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => {
        // console.log("axios request: ", res.data)
        dispatch({type: FETCH_DOG_SUCCESS, payload: res.data});
      })
      .catch(error => {
        console.log("catch error: ", error.response.message);
        dispatch({
          type: FETCH_DOG_FAIL,
          payload: error.response.message
        });
      });
  };
};
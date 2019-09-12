// Step 4 - Set up initialState & reducers

// Step 9 - set up Reducer logic for actions
import {FETCH_BREWERY_START, FETCH_BREWERY_SUCCESS} from "../actions";

const initialState = {
  insults: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BREWERY_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_BREWERY_SUCCESS:
      return {
        ...state,
        brewery: action.payload,
        isFetching: false,
      }; 
    default:
      return state;
  }
}
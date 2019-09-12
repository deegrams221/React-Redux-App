// Step 4 - Set up initialState & reducers

// Step 9 - set up Reducer logic for actions
import {FETCH_DOG_START, FETCH_DOG_SUCCESS} from "../actions";

const initialState = {
  insults: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DOG_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        dog: action.payload,
        isFetching: false,
      }; 
    default:
      return state;
  }
}
// Step 5 - Build out components
// Step 6 - import connect and set up mSTP

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getDog} from '../store/actions';

const Dogs = ({getDog, dog, isFetching}) => {
  useEffect(() => {
    getDog();
  }, [getDog])

  if(isFetching) {
    return <h2>Fetching A Random Dog!</h2>
  }

  return (
    <>
      <h2>{dog}</h2>
      <button onClick={getDog}>See Another Dog</button>
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

export default connect(mapStateToProps,{getDog})(Dogs);
// Step 5 - Build out components
// Step 6 - import connect and set up mSTP

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getDog} from '../store/actions';

const Dogs = ({getDog, image, isFetching}) => {
  useEffect(() => {
    getDog();
  }, [getDog])

  if(isFetching) {
    return <h2>Fetching A Random Dog!</h2>
  }

  return (
    <>
      <img src={image} alt="random dog" />
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
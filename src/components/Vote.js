import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import upVote from '../actions';
import downVote from '../actions';

const Vote = ({ dispatch }) => {
  return (
    <div >
      <button className="upvote" 
      onClick={() => {
        dispatch(upVote(id))
      }}
      >&#8593;</button>
      <br />
      <button className="downvote"
      onClick={() => {
        dispatch(downVote(id))
      }}>&#8595;</button>
      <span className="votecount">{voteCount}</span>
    </div>
  )
}

Vote.propTypes = {
  id: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired
}

export default connect()(Vote);
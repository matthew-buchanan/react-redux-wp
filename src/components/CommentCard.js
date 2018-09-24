import React from 'react';
//import Vote from './Vote';
import PropTypes from 'prop-types';

const CommentCard = (key, commentPoints, commentText) => {
  return (
    <div key={key}>
      <div className="comment-points">
        <span>{commentPoints}</span>
      </div>
      <div className="comment-text">
        <p>{commentText}</p>
      </div>
    </div>
  )
}

CommentCard.propTypes = {
  key: PropTypes.number.isRequired,
  commentPoints: PropTypes.number.isRequired,
  commentText: PropTypes.string.isRequired,
}

export default CommentCard;
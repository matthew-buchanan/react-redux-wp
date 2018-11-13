import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

const PostCard = ({headline, content, votes, onUpClick, onDownClick}) => {
  return (
    <div className="card">
      <h2 className="headline">{headline}</h2>
      <p className="content">{content}</p>
      <button onClick={onUpClick}><span style={{fontFamily:'Wingdings'}}>&#233;</span></button>
      <span className="votes">{votes}</span>
      <button onClick={onDownClick}><span style={{fontFamily:'Wingdings'}}>&#234;</span></button>
    </div>
  )
}

PostCard.propTypes = {
  headline: PropTypes.string.isRequired,
  content: PropTypes.string
}

export default PostCard;
import React from 'react';
import Vote from './Vote';
import PropTypes from 'prop-types';

const PostCard = (props) => {
  return (
    <div key={props.key}>
      <div className="post-votes">{props.upvotes}</div>
      <Vote />
      <div className="post-head">
        <p data-id={props.id} className="post-headline" data-clicked="false" onClick={props.onClick}>{props.headline}</p>
        <p className="post-content" data-active="false">{props.content}</p>
        <a href={props.link} className="post-link">  {props.link}</a>
      </div>
      <div className="post-commentNum">
        <span>{props.commentNum}</span>
      </div>
    </div>
  );
}

// add PropTypes here

export default PostCard;
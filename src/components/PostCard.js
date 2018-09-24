import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
const PostCard = (id, headline, content) => {
  newRoute = "/" + id;
  return (
    <div /*key={props.key}*/>
      <div className="post-head">
        <p className="post-headline" 
        onClick={() => {
          <Redirect to={newRoute} />
        }}>{headline}</p>
        <p className="post-content" data-active="false">{content}</p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  headline: PropTypes.string.isRequired,
  content: PropTypes.string
}


export default PostCard;
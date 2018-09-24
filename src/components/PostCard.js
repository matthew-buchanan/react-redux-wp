import React from 'react';
import PropTypes from 'prop-types';
//import { Redirect } from 'react-router';
const PostCard = (headline, content) => {
  /*
  newRoute = "/" + id;
  onClick={() => {
    <Redirect to={newRoute} />
  }}
  */
    <div /*key={props.key}*/>
      <div className="post-head">
        <h2 className="post-headline" 
        >{headline}</h2>
        <p className="post-content" data-active="false">{content}</p>
      </div>
    </div>
}

PostCard.propTypes = {
  headline: PropTypes.string.isRequired,
  content: PropTypes.string
}


export default PostCard;
import React from 'react';

const Vote = (props) => {
  return (
    <div key={props.key} data-obj={props.id}>
      <button className="upvote">&#8593;</button>
      <br />
      <button className="downvote">&#8595;</button>
    </div>
  )
}

export default Vote;
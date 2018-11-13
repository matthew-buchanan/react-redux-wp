import React from 'react';
import PostCard from './PostCard';

const PostCardList = ({posts, upVote, downVote}) => {
  return (
  <div>
    {posts.map(post => (
      <PostCard key={post.id} {...post} onUpClick={() => upVote(post.id)} onDownClick={() => downVote(post.id)}  />
    ))}
  </div>
  )
}

export default PostCardList;
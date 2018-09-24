import React from 'react';
import PostCard from './PostCard';

const PostCardList = ({ posts }) => {
  <div>
    {posts.map(post => {
      <PostCard key={post.id} {...post} />
    })}
  </div>
}

export default PostCardList;
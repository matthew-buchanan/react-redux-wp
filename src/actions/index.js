export const ADD_POST = 'ADD_POST';
export const UP_VOTE = 'UP_VOTE';
export const DOWN_VOTE = 'DOWN_VOTE';

export const addPost = (headline, content) => ({
  type: ADD_POST,
  headline, 
  content
});

export const upVote = (id) => ({
  type: UP_VOTE,
  id
});

export const downVote = (id) => ({
  type: DOWN_VOTE,
  id
})

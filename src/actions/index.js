let nextPost = 0;
let nextComment = 0;
let votes = 0;
export const addPost = (headline, content) => ({
  type: 'ADD_POST',
  id: nextPost++,
  headline, 
  content
});

export const upVote = (postID) => ({
  type: 'VOTE_UP',
  postID,
  votes: votes++
});

export const downVote = (postID) => ({
  type: 'VOTE_DOWN',
  postID,
  votes: votes--
})


export const addComment = (text, postID) => ({
  type: 'ADD_COMMENT',
  id: nextComment++,
  parentPost: postID,
  text
});

export const deleteComment = id => ({
  type: 'DELETE_COMMENT',
  id: id
});

export const editComment = (id, text) => ({
  type: 'EDIT_COMMENT',
  id: id,
  text
});

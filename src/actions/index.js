let nextPost = 0;
let nextComment = 0;
let votes = 0;
export const addPost = text => ({
  type: 'ADD_POST',
  id: nextPost++,
  text
});

export const upVote = (objID) => ({
  type: 'VOTE_UP',
  id: objID,
  votes: votes++
  // objID
})
export const downVote = (objID) => ({
  type: 'VOTE_DOWN',
  id: objID,
  votes: votes--
})

// need capability to comment on comment, or on post
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

import { combineReducers } from 'redux';

// data structure needs more attention

const posts = (state = [], action) => {
  if (action.type === 'ADD_POST') {
    return [
      ...state,
      {
        headline: action.headline,
        content: action.content
      }
    ]
  }
  else {
    return state;
  }
}
/*
const comments = (state = [], action) => {
  switch (action.type) {
    case ('ADD_COMMENT'):
      return [
        ...state,
        {
          id: action.id,
          parentPost: action.parentPost,
          text: action.text
        }
      ]
    case ('DELETE_COMMENT'):
      let newComments = state.comments.filter(comment => {
        return comment.id !== action.id
      })
      return [
        ...state,
        newComments
      ]
    case ('EDIT_COMMENT'):
      let newComments = state.comments.map(comment => {
        if (comment.id === action.id) {
          return {
            id: action.id,
            parentPost: comment.parentPost,
            text: action.text
          }
        }
        else return comment
      });
      return [
        ...state,
        newComments
      ]
      
  }
}
*/

export default posts;

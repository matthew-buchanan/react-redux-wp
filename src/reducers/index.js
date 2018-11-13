let postID = -1;
const posts = (state = [], action) => {
switch (action.type) {
  case 'ADD_POST':
    return Object.assign([], state, [
        ...state,
        {
          id: postID++,
          headline: action.headline,
          content: action.content,
          votes: 0         
        }
      ]
    )
  case 'UP_VOTE':
    return state.map(
      post => {
        if (post.id === action.id) {
          post.votes += 1;
        }
        return post
      }
    )
  case 'DOWN_VOTE':
    return state.map(
      post => {
        if (post.id === action.id) {
          post.votes += -1;
        }
        return post
      }
    )       
  default: 
    return state;
  }
}


export default posts;

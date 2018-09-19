import React from 'react';

const CommentAdd = () => {
  return (
    <form>
      <label>
        Comment:
      <textarea rows="3" cols="100" name="comment" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default CommentAdd;
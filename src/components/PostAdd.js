import React from 'react';

const PostAdd = () => {
  return (
    <form>
      <label for="headline">Headline:</label>
      <input type="text" name="headline" />
      <label for="post">Post:</label>
      <textarea rows="4" cols="100" type="text" name="post" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PostAdd;
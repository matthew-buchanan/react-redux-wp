import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';

const PostAdd = ({ dispatch }) => {
  let head, con;
  return (
    <form
    onSubmit={e => {
      e.preventDefault();
      dispatch(addPost(head.value, con.value));
      head.value = '';
      con.value = '';
    }}>
      <label htmlFor="headline">Headline:</label>
      <input type="text" name="headline" ref={node => (head=node)} />
      <br />
      <label htmlFor="content">Post:</label>
      <br />
      <textarea rows="4" cols="50" type="text" name="content" ref={node => (con=node)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect()(PostAdd);
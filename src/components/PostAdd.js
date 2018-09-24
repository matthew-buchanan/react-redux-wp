import React from 'react';
import { connect } from 'redux';
import addPost from '../actions';

const PostAdd = ({ dispatch }) => {
  let headline, content;
  return (
    <form
    onSubmit={e => {
      e.preventDefault()
      if (!headline.value.trim() || !content.value.trim()) {
        return
      }
      dispatch(addPost(headline.value, content.value))
        headline.value = '';
        content.value = '';
    }}>
      <label for="headline">Headline:</label>
      <input type="text" name="headline" ref={node => headline = node} />
      <label for="content" ref={this.content}>Post:</label>
      <textarea rows="4" cols="100" type="text" name="content" ref={node => content = node} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default connect()(PostAdd);
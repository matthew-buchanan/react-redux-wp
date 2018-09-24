import React from 'react';
import PostRedux from '../containers/PostRedux';
import PostAdd from '../components/PostAdd';

const Home = () => {
  <div>
    <h1>Welcome to the Home page</h1>
    <PostAdd />
    <PostRedux />
  </div>
}

export default Home;


import React from "react";
import Jumbotron from './components/Jumbotron';
import PostAdd from './components/PostAdd';
import PostRedux from "./containers/PostRedux";

const App = () => {
  return (
  <div>
    <Jumbotron />
    <PostAdd />
    <PostRedux />
  </div> 
  )
};
export default App;

import { connect } from 'react-redux';
import PostCardList from '../components/PostCardList';
import {upVote, downVote} from '../actions';

const getPosts = (posts) => {
  return posts.sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  upVote: id => dispatch(upVote(id)),
  downVote: id => dispatch(downVote(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCardList);
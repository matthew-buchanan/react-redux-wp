import { connect } from 'react-redux';
import PostCardList from '../components/PostCardList';

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps
)(PostCardList);
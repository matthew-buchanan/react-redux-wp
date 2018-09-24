import Vote from '../components/Vote';
import { connect } from 'react-redux';
import upVote from '../actions';
import downVote from '../actions';



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote)
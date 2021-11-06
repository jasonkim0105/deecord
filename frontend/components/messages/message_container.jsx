import { connect } from "react-redux";
import Message from "./message";

const mapStateToProps = state => ({
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: serverId => dispatch(fetchUsers(serverId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);

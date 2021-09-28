import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import Channel from "./channel";

mapStateToProps = (state) => {

}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Channel)
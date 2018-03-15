import {login} from '../../actions/session';
import {connect} from 'react-redux';
import Login from './login_form';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);


import { bindActionCreators } from 'redux'
import * as actions from "../actions";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm"

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
const mapStateToProps = state => {
    return { loginUser: state.loginUser };
};


const Login = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default Login;
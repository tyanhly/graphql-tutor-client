import React, {Component} from "react";
import {login as apiLogin} from "../api/Login"
import * as constants from "../constants/AppConstants"


class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state =  constants.loginFormInitState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log('constructor')
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({loginStatus: constants.LOGIN_PROCESSING});
        let user = this.state;
        apiLogin(user).then((result) => {
            if(result.isLogined){
                this.props.actions.loginSuccess({...user, loginStatus:constants.LOGIN_SUCCESS});
                this.setState({loginStatus: constants.LOGIN_SUCCESS});
            }else{
                this.props.actions.loginFail({...constants.loginFormInitState, loginStatus:constants.LOGIN_FAIL}, result.errorMsg);
                this.setState({...constants.loginFormInitState, loginStatus: constants.LOGIN_FAIL, error: result.errorMsg});
            }
        });

    }
    handleChange(event){
        this.setState({
            [ event.target.id ]: event.target.id === 'remember'?
                event.target.checked: event.target.value
        });

    }
    render() {
        let alert = (this.state.loginStatus === constants.LOGIN_FAIL)?
                (<div className='alert alert-danger' > {this.state.error}</div>): (this.state.loginStatus === constants.LOGIN_SUCCESS)?
                (<div className='alert alert-success' > Login Success</div>) : '';
        let disabledSubmit = (this.state.loginStatus === constants.LOGIN_PROCESSING || this.state.loginStatus === constants.LOGIN_SUCCESS )?
                'disabled': '';
        return (
            <form >
                {alert}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input  onChange={this.handleChange} value={this.state.username}  type="text" className="form-control" id="username"  placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input  onChange={this.handleChange} value={this.state.password}   type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" id='remember' checked={this.state.remember} className="form-check-input"  onChange={this.handleChange} />
                            Remember
                    </label>
                </div>
                <button type="submit" className='btn btn-primary' disabled={disabledSubmit} onClick={this.handleSubmit}>Submit</button>
            </form>

        );
    }
}

export default LoginForm;
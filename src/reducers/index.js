import {LOGIN_FAIL, LOGIN_SUCCESS} from '../constants/ActionTypes';
import * as constants from '../constants/AppConstants';
const initialState = {
    loginUser:constants.loginFormInitState
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('reducer login success');
            console.log(action.user);
            return { ...state, loginUser: {...action.user, error:''}};
        case LOGIN_FAIL:
            console.log('reducer login fail');
            console.log(action.user);
            return { ...state, loginUser: {...action.user, error: action.error}};
        default:
            return state
    }
}


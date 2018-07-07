import * as types from "../constants/ActionTypes";

export const loginSuccess = user => ({ type: types.LOGIN_SUCCESS, user }) ;

export const loginFail = (user, error) => ({type: types.LOGIN_FAIL, user, error});
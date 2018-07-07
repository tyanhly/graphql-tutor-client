
export const LOGIN_PENDING ='LOGIN_PENDING';
export const LOGIN_PROCESSING ='LOGIN_PROCESSING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const loginFormInitState = {
    username: '',
    password: '',
    remember: false,
    loginStatus: LOGIN_PENDING,
    error:''
};

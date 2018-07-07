//fake login
export const login = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            let isSuccess = Math.floor(Math.random() * 10) % 2;
            if (isSuccess) {
                resolve({isLogined: true});
            } else {
                resolve({isLogined: false, errorMsg: 'Login error'});
            }
        }, 2000)
    });
};

import axios from 'axios';

const USER_LOGIN_BASE_URL = 'http://localhost:8080/home';

class UserLoginAPI {

    userLogin(user) {
        return axios.post(USER_LOGIN_BASE_URL + '/userLogin', user);
    }

    generateToken(userEmail){
        return axios.get(USER_LOGIN_BASE_URL + '/generateToken/' + userEmail);
    }

    resetPassword(userEmail,userNewPassword){
        return axios.post(USER_LOGIN_BASE_URL + '/resetPassword/' + userEmail + '/' + userNewPassword);
    }

}

export default new UserLoginAPI();

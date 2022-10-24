import axios from 'axios';

export const UserService = {

    currentUser: () => {
        return axios.get('/api/currentUser');
    },

    get: () => {
        return axios.get('/api/user/index');
    },

    login: data => {
        return axios({
            method: 'post',
            url: '/api/login',
            data: data,
            headers: { "Content-Type": "multipart/form-data" }
        })
    },

    logout: () => {
        return axios.post('/api/logout');
    }
}
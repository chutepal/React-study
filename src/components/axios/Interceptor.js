import axios from "axios";

// axios.defaults.baseURL = 'https://thingproxy.freeboard.io/fetch/https://freeapi.gerasim.in/api/JWT/';

let refresh = false;

const getCookie = (name) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}

// axios.interceptors.response.use(resp => {
//     console.log('interceptor res=>', resp)
//     return resp;
// }, async error => {
//     console.log('interceptor triggered')
//     const refreshCred = {
//         "emailId": getCookie('username'),
//         "token": getCookie('token'),
//         "refreshToken": getCookie('refreshToken')
//     }
//     if (error.response.status === 401 && !refresh) {
//         refresh = true;

//         const response = await axios.post('refresh', { refreshCred });

//         if (response.status === 200) {
//             axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;
//             return axios(error.config);
//         }
//     }
//     refresh = false;
//     return error;
// });
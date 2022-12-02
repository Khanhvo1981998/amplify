import Axios from "axios"
import { DOMAIN, DOMAIN_MOVIE_API, TOKEN, TOKEN_CYBERSOFT } from "../util/Config";

export class baseService {
    //put json về phía backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            } //JWT
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            } //JWT
        })
    }


    get = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}

//     setSpinnerEnded,
//     setSpinnerStarted,
// } from "../redux-toolkit/spinnerSlice";
// import { storeToolkit } from "../redux-toolkit/store";


// let timeRequestMax;

// let getAccesstoken = () => {
//     let jsonData = localStorage.getItem("user");
//     if (jsonData) {
//         return JSON.parse(jsonData).accessToken;
//     } else {
//         return null;
//     }
// };
// export const baseService = Axios.create({
//     baseURL: DOMAIN,
//     timeout: 1000 * timeRequestMax,
//     headers: {
//         TokenCybersoft: TOKEN_CYBERSOFT,
//         Authorization: "Bearer " + getAccesstoken(),
//     },
// });
// // can thiệp trước khi gọi request
// baseService.interceptors.request.use(
//     function (config) {
//         // Do something before request is sent
//         storeToolkit.dispatch(setSpinnerStarted());
//         console.log("yes request");
//         return config;
//     },
//     function (error) {
//         console.log("error: ", error);
//         // Do something with request error
//         return Promise.reject(error);
//     }
// );
// // can thiệp sau khi có request trả về

// baseService.interceptors.response.use(
//     function (response) {
//         storeToolkit.dispatch(setSpinnerEnded());
//         // Any status code that lie within the range of 2xx cause this function to trigger
//         // Do something with response data
//         return response;
//     },
//     function (error) {
//         console.log("error interceptor: ", error);
//         // đá ra ngoài login nếu status = 401
//         storeToolkit.dispatch(setSpinnerEnded());

//         switch (error.response.status) {
//             case 401:
//             case 403:
//                 window.location.href = "/login";
//         }
//         return Promise.reject(error);
//     }
// );
import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://tour2sky.silvito.com.ua/api/',
    }
);

export const clientProfileAPI = {
    getProfileInfo() {
        return instance.get(`cabinet/profile/me`)
    },
    registrationNewClient() {
        return instance.post(``)
    },
}
export const authAPI = {
    auth() {
        return instance.get(``)
    },
    login(email, password,type) {
        return instance.post(`auth/login`, {email, password,type})
    },
    logout() {
        return instance.delete(``)
    },
}
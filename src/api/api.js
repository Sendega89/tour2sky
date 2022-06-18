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
    updateProfileInfo() {
        return instance.post(``)
    },
}
export const authAPI = {
    me() {
        return instance.get(``)
    },
    login(email, password) {
        return instance.post(``, {email, password})
    },
    logout() {
        return instance.delete(``)
    },
}
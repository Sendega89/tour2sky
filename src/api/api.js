import * as axios from "axios";


/*Дані для авторизації апі
client@gmail.com
partner@gmail.com
пароль: 111111*/

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://tour2sky.silvito.com.ua/api/',

    }
);
export const authAPI = {
    me(token) { return  instance.get(`cabinet/profile/me`,{headers: {Authorization: token}}) },

    login(email, password, type = 1) {
        return (
            instance.post(`auth/login`,{email,password,type})
        )
    },
    register(registerData){
        return (
            instance.post(`auth/register`,registerData)
        )
    },
    loginFromFacebook (socialToken,type){
        return (
            instance.post(`auth/facebook`,{socialToken,type})
        )
    },
    loginFromGoogle (googleServerAuthCode,type){
        return (
            instance.post(`auth/google`,{googleServerAuthCode,type})
        )
    },
}
export const profileAPI = {

}
export const productAPI = {
    getServiceList (){
        return instance.get(`service/list`)
    },
    getServiceItemView (serviceId){
      return instance.get(`service/${serviceId}/view`)
    },

}



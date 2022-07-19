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
export const subscribe = {
    subscribe(userEmail){
      let sendEmail={"email":userEmail}
        return instance.post(`site/subscribe`,sendEmail)
    }
}
export const authAPI = {

    me(token) {
        return instance.get(`cabinet/profile/me`, {headers: {Authorization: token}})
    },

    login(email, password) {
        return (
            instance.post(`auth/login`, {email, password})
        )
    },
    register(registerData) {
        return (
            instance.post(`auth/register`, registerData)
        )
    },
    loginFromFacebook(socialToken, type) {
        return (
            instance.post(`auth/facebook`, {socialToken, type})
        )
    },
    loginFromGoogle(googleServerAuthCode, type) {
        return (
            instance.post(`auth/google`, {googleServerAuthCode, type})
        )
    },
    getType() {
        return (
            instance.get(`directory/user-type`)
        )
    }
}
export const myAccountAPI = {
    addServiceToFavorite(serviceId, token) {
        return (
            instance.post(`service/${serviceId}/favorite`,{},{headers:{Authorization: token  }})
        )
    },
    removeServiceFromFavorite(serviceId, token) {
        return (
            instance.delete(`service/${serviceId}/favorite`, {headers: {Authorization: token}})
        )
    },
    getFavoriteService(token){
        return (
            instance.get(`cabinet/service-favorite`,{headers: {Authorization: token}})
        )
    },
    updateProfileInfo(updateOption,token) {
        return (
            instance.post(`cabinet/profile/update`,updateOption,{headers: {Authorization: token}})
        )
    },
    getProfileOrders(token,page,service_name,status) {
        return instance.get(`cabinet/order`,{headers: {Authorization: token}})
    },
    getCreateNewOrder(token,ordersInfo) {
        let orderCreateRequest = {
            service_id:ordersInfo.service_id ,
            date: ordersInfo.date,
            time: ordersInfo.time,
            members_count: ordersInfo.members_count
        }
        return instance.post(`order/create`,orderCreateRequest ,{headers: {Authorization: token}})
    },
    deleteClientProfile (token){
        return instance.delete(`cabinet/profile/delete`,{headers: {Authorization: token}})
    }
}
export const productAPI = {
    getServiceList(page) {
        return instance.get(`service/list?page=${page}`)
    },
    getServiceItemView(serviceId) {
        return instance.get(`service/${serviceId}/view`)
    },
    getFilteredCatalogAPI(filterOptions) {
        return instance.get(`service/list?min_price=${filterOptions.minPrice}
   &max_price=${filterOptions.maxPrice}
   &min_duration=${filterOptions.minTime}
   &max_duration=${filterOptions.maxTime}
   &sort=${filterOptions.sort}
   &page=${filterOptions.page}
   `)

    }
}


/*rating%5B%5D=1&rating%5B%5D=2&rating%5B%5D=3&rating%5B%5D=4&rating%5B%5D=5*/
/* &rating%5B%5D=${filterOptions.rating}*/

import * as axios from "axios";



const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://tour2sky.silvito.com.ua/api/admin/',

    }
);

export const adminActivityLocationPage = {
    /*me(token) {
        return instance.get(`cabinet/profile/me`, {headers: {Authorization: token}})
    }*/
}
export const adminAttribute = {

}
export const adminCategory = {

}
export const adminGeo = {

}
export const adminOrder = {

}
export const adminPartner = {
    getAdminPartnersList(page,token){
        return instance.get(`partner?page=${page}`,{headers: {Authorization: token}})
    }
}
export const adminSEO = {

}
export const adminService = {

}
export const adminUser = {

    getAdminUsersList(page,token){
        return instance.get(`user?page=${page}`,{headers: {Authorization: token}})
    },
    getAdminUserView(userId,token){
        return instance.get(`user/${userId}`,{headers: {Authorization: token}})
    }
}





import * as axios from "axios";







const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://tour2sky.silvito.com.ua/api/',

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

}
export const adminSEO = {

}
export const adminService = {

}
export const adminUser = {

    getAdminUsersList(page,token){
        return instance.get(`admin/user?page=${page}`,{headers: {Authorization: token}})
    }
}





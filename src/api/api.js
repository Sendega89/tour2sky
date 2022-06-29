import * as axios from "axios";

/*Дані для авторизації апі
client@gmail.com
partner@gmail.com
пароль: 111111*/

const instance = axios.create(
    {
        /*withCredentials: true,*/
        baseURL: 'https://tour2sky.silvito.com.ua/api/',
    }
);
export const authAPI = {
    me() { return  instance.get(`cabinet/profile/me`) },

    login(email, password, type = 1) {
        return (
            instance.post(`auth/login`,{email,password,type})
        )
    }
}
/*export const testRequest = {
    getTest() {
        return (
            instance.get(`service/categories`)
                .then(response => {
                    return console.log(response.data.data)
                })
        )
    }
}*/
export const productAPI = {
    getServiceList (){
        return instance.get(`service/list`)
    },
    /*getServiceList (page,per_page,category_id,category_link,city_id,
    city_link,activity_location_id,activity_location_link,
                    min_price,max_price,min_duration,max_duration,
                    popular_cities,sort){
        return instance.get(`service/list?page=${page}&per_page=${per_page}&
        category_id=${category_id}&category_link=${category_link}&
        city_id=${city_id}&city_link=${city_link}&activity_location_id=${activity_location_id}&
        activity_location_link=${activity_location_link}&
        min_price=${min_price}&max_price=${max_price}&
        min_duration=${min_duration}&max_duration=${max_duration}&
        sort=${sort}`)
    },*/
}



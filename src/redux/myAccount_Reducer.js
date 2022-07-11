import {myAccountAPI} from "../api/api";




const SET_WISHLIST = "tour2sky/myAccount/SET_WISHLIST";
const SET_ADD_TO_FAVORITE = "tour2sky/myAccount/SET_ADD_TO_FAVORITE";
const REMOVE_ITEM_FAVORITE = "tour2sky/myAccount/REMOVE_ITEM_FAVORITE";




const initialState = {
    wishList: {
        data: [
            {
                id: 1,
                service_id: 123,
                user_id: 6543,
                name: "Concert 12234",
                link: "concert-12234",
                created_at: "2021-12-25 09:30:25",
                service: {
                    id: 1,
                    user_id: 1,
                    name: "Concerts",
                    link: "concerts",
                    created_at: "2021-12-25 09:30:25",
                    price: 30,
                    duration: 120,
                    status: 1,
                    description: "Some service description",
                    rating: 4.5,
                    seo_title: "Concerts",
                    seo_description: "Concerts",
                    index_status: 1,
                    seo_image: {
                        id: 1,
                        name: "concert-1.jpeg",
                        mime_type: "image/jpeg",
                        link: "http://tour2sky.test/images/service/concert-1.jpeg",
                        thumb: "http://tour2sky.test/images/service/thumb/concert-1.jpeg"
                    },
                    attributes: {
                        data: [
                            {
                                id: 1,
                                service_id: 2,
                                attribute_id: 3,
                                name: "Wi-Fi",
                                value: "exist",
                                description: "Some description text"
                            }
                        ]
                    },
                    categories: {
                        data: [
                            {
                                id: 1,
                                service_id: 2,
                                category_id: 3,
                                name: "Concerts"
                            }
                        ]
                    },
                    images: {
                        data: [
                            {
                                id: 1,
                                name: "concert-1.jpeg",
                                mime_type: "image/jpeg",
                                link: "http://tour2sky.test/images/service/concert-1.jpeg",
                                thumb: "http://tour2sky.test/images/service/thumb/concert-1.jpeg"
                            }
                        ]
                    },
                    country: {
                        id: 1,
                        continent_id: 1,
                        name: "Ukraine",
                        link: "ukraine",
                        status: 1,
                        created_at: "2021-12-25 09:30:25"
                    },
                    region: {
                        id: 1,
                        country_id: 1,
                        name: "Одесская область",
                        link: "district-odessa",
                        status: 1,
                        created_at: "2021-12-25 09:30:25"
                    },
                    city: {
                        id: 1,
                        region_id: 1,
                        name: "Одесса",
                        link: "odessa",
                        status: 1,
                        seo_title: "Concerts",
                        seo_description: "Concerts",
                        index_status: 1,
                        seo_image: {
                            id: 1,
                            name: "concert-1.jpeg",
                            mime_type: "image/jpeg",
                            link: "http://tour2sky.test/images/service/concert-1.jpeg",
                            thumb: "http://tour2sky.test/images/service/thumb/concert-1.jpeg"
                        },
                        created_at: "2021-12-25 09:30:25"
                    },
                    location: {
                        id: 1,
                        name: "Аркадия",
                        link: "arcadia",
                        latitude: 46.430869,
                        longitude: 30.761649,
                        region_id: 1,
                        city_id: 1,
                        status: 1,
                        seo_title: "Concerts",
                        seo_description: "Concerts",
                        index_status: 1,
                        seo_image: {
                            id: 1,
                            name: "concert-1.jpeg",
                            mime_type: "image/jpeg",
                            link: "http://tour2sky.test/images/service/concert-1.jpeg",
                            thumb: "http://tour2sky.test/images/service/thumb/concert-1.jpeg"
                        },
                        created_at: "2021-12-25 09:30:25"
                    },
                    currency: {
                        id: 1,
                        name: "US Dollar",
                        code: "USD",
                        rate: 28.1,
                        status: 1
                    }
                }
            }
        ],
        meta: {
            pagination: {
                total: 30,
                count: 2,
                per_page: 15,
                current_page: 1,
                total_pages: 2,
                links: {},
            }
        },
        pagination: {},
    },
    isFavoriteItem:false,
}

const myAccount_Reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_WISHLIST: {
            return {...state,
                wishList:{
                    data:action.data.data,
                    meta: action.data.meta,
                    pagination:action.data.meta.pagination
            }
            }
        }
        case SET_ADD_TO_FAVORITE:{
            return {
                ...state,
                isFavoriteItem: true
            }
        }
        default:
            return state
    }
}


export const setWishlist = (data) => ({type: SET_WISHLIST, data});
export const setItemToFavorite = (data) => ({type: SET_WISHLIST, data});
export const removeItemToFavorite = (data) => ({type: SET_WISHLIST, data});



/*This is Thunk*/
export const addRemoveWishlist = (serviceId, addRemoveHandler, token) => async (dispatch) => {
    let response;
    if (addRemoveHandler) {
        response = await myAccountAPI.addServiceToFavorite(serviceId,token)
    } else {
        response = await myAccountAPI.removeServiceFromFavorite(serviceId,token)
    }
}
export const getWishList = (token) => async (dispatch) => {
    let response = await myAccountAPI.getFavoriteService(token);
    dispatch(setWishlist(response.data))
}
export default myAccount_Reducer
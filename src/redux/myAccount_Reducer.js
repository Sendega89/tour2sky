import {myAccountAPI} from "../api/api";


const SET_WISHLIST_INFO = "tour2Sky/SET_WISHLIST_INFO";
const SET_WISHLIST = "tour2Sky/SET_WISHLIST";





const initialState = {
    data: [],
    info: [{
    id: null,
    service_id: null,
    user_id: null,
    name: "",
    link: "",
    created_at: "",
}]
}

const myAccount_Reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_WISHLIST_INFO: {
            return {
                ...state,
                info:[...action.data],
            }
        }
        case SET_WISHLIST: {
            return {...state,
                data:action.data.data,
            }
        }
        default:
            return state
    }
}

export const setWishlistInfo = (data) => ({type: SET_WISHLIST_INFO, data});
export const setWishlist = (data) => ({type: SET_WISHLIST, data});



/*This is Thunk*/
export const addRemoveWishlist = (serviceId, addRemoveHandler, token) => async (dispatch) => {
    let response;
    if (addRemoveHandler) {
        response = await myAccountAPI.addServiceToFavorite(serviceId,token)
    } else {
        response = await myAccountAPI.removeServiceFromFavorite(serviceId,token)
    }
    if (response.status === 200) {
        dispatch(setWishlistInfo(response.data));

    } else {
        console.log('else')
    }
}
export const getWishList = (token) => async (dispatch) => {
    let response = await myAccountAPI.getFavoriteService(token);
    dispatch(setWishlist(response.data))
}
export default myAccount_Reducer
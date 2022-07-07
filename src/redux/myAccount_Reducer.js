import {myAccountAPI} from "../api/api";


const SET_WISHLIST = "tour2Sky/SET_WISHLIST";




const initialState = {
    id: 1,
    service_id: null,
    user_id: null,
    name: "",
    link: "",
    created_at: "",
}

const myAccount_Reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_WISHLIST: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setWishlist = (data) => ({type: SET_WISHLIST, data});


/*This is Thunk*/
export const getWishlist = (serviceId,addRemoveHandler,token) => async (dispatch) => {
    let response;
    if (addRemoveHandler) {
        response = await myAccountAPI.addServiceToFavorite(serviceId,token)

    } else {
        response = await myAccountAPI.removeServiceFromFavorite(serviceId,token)
    }
    if (response.status === 200) {
        dispatch(setWishlist(response.data));

    } else {
        console.log('else')
    }

}
export default myAccount_Reducer
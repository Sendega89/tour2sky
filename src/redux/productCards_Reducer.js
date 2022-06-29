import {productAPI} from "../api/api";


const SET_PRODUCTS_DATA = "SET_CLIENT_PROFILE";


const initialState = []

const productCards_Reducer = (state=initialState, action)=>{

    switch (action.type) {

        case SET_PRODUCTS_DATA:{

            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}

export const setProductCardData = (data) =>({type:SET_PRODUCTS_DATA,data});

/*This is Thunk*/
export const getProductCardData = () => async (dispatch) => {
        let response = await productAPI.getServiceList()
        if (response.status === 200) {
            dispatch(setProductCardData(response))
        } else {
            console.log('else')
        }

}
export default productCards_Reducer
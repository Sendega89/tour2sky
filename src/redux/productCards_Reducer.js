import {productAPI} from "../api/api";


const SET_PRODUCTS_DATA = "SET_CLIENT_PROFILE";


const  initialState = {
    data: [],
    meta:{},
    pagination:{},
    isFetching: true,
};

const productCards_Reducer = (state=initialState, action)=>{

    switch (action.type) {

        case SET_PRODUCTS_DATA:{

            return {...state,
                data:action.data.data,
                meta:action.data.meta,
                pagination:action.data.meta.pagination,
                isFetching: false
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
            dispatch(setProductCardData(response.data))
        } else {
            console.log('else')
        }
}
export default productCards_Reducer
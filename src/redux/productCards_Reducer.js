import {productAPI} from "../api/api";
import Page404 from "../Pages/Page404/Page404";


const SET_UNAUTHORIZED_CATALOG = "SET_UNAUTHORIZED_CATALOG";
const SET_CLIENTS_CATALOG = "SET_CLIENTS_CATALOG";
const SET_FILTERED_CATALOG = "SET_FILTERED_CATALOG";

const  initialState = {
    data: [],
    meta:{},
    pagination:{},
    isFetching: true,
};

const productCards_Reducer = (state=initialState, action)=>{

    switch (action.type) {
        case SET_CLIENTS_CATALOG:
        case SET_UNAUTHORIZED_CATALOG:
        {
            return {...state,
                data:action.data.data,
                meta:action.data.meta,
                pagination:action.data.meta.pagination,
                isFetching: false
            }
        }
        case SET_FILTERED_CATALOG:{
            return {
                ...state,
                data:action.data.data,
                meta:action.data.meta,
                pagination:action.data.meta.pagination,
                isFetching: false,
            }
        }
        default:
            return state
    }
}

export const setUnauthorizedCatalog = (data) =>({type:SET_UNAUTHORIZED_CATALOG,data});
export const setClientCatalog = (data) =>({type:SET_CLIENTS_CATALOG,data});
export const setFilteredCatalog = (data) =>({type:SET_FILTERED_CATALOG,data});


/*This is Thunk*/
export const getProductCardData = (page) => async (dispatch) => {
    if(page) {
        let response = await productAPI.getServiceList(page)
        if (response.status === 200) {
            dispatch(setUnauthorizedCatalog(response.data))
        } else if (response.data===null) {
            return setClientCatalog(response.data)
            }
         else {
        return <Page404/>}
}}
export const getFilteredCatalog = (filterOptions) => async (dispatch) => {
    let response = await productAPI.getFilteredCatalogAPI(filterOptions);
    dispatch(setFilteredCatalog(response.data))
}
export default productCards_Reducer
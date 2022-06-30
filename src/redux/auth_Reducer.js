import React from "react";
import {authAPI} from "../api/api";




const SET_USER_DATA = "tour2sky-project/auth/SET_USER_DATA";


/*const initialState = {
    id: null,
    email: null,
    name: null,
    surname: null,
    phone: null,
    type: null,
    status: null,
    created_at: null,
    statusObject: {
        id: null,
        name: null
    },
    typeObject: {
        id: null,
        name: null
    }
}*/
let initialState = {
    isAuth:true,
}
const auth_Reducer = (state=initialState,action)=>{

    switch (action.type) {

        case SET_USER_DATA:{

            return {
                ...state,
            ...action.data,
                isAuth:true,
            }
        }
        default:
            return state
    }
}

export const setUserData = (data) =>({SET_USER_DATA,data});//this is Action Creator

/*This is Thunk*/
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
        dispatch(setUserData(response.data))

}



export default auth_Reducer
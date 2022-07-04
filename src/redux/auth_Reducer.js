import React from "react";
import {authAPI} from "../api/api";




const SET_USER_DATA = "tour2sky-project/auth/SET_USER_DATA";
const CREATE_SUCCESS = "tour2sky-project/auth/CREATE_SUCCESS";


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
    id: null,
    email: "",
    name: "",
    surname: "",
    phone: "",
    type: null,
    status: null,
    created_at: "",
    statusObject: {
        id: null,
        name: ""
    },
    typeObject: {
        id: null,
        name: ""
    },
    createdSuccess:false
}
const auth_Reducer = (state=initialState,action)=>{

    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
            ...action.data,
            }
        }
        case CREATE_SUCCESS:{
            return {
                ...state,
                createdSuccess:true
            }
        }
        default:
            return state
    }
}

export const setUserData = (data) =>({SET_USER_DATA,data});//this is Action Creator
export const setCreatedSuccess = () =>({CREATE_ACCOUNT: CREATE_SUCCESS});//this is Action Creator

/*This is Thunk*/
export const getAuthUserData = (token) => async (dispatch) => {
    let response = await authAPI.me(token);
    if(response.status===200){
        dispatch(setUserData(response.data));
    }
}
export const createAccount = (registerData,setStatus) => async (dispatch) => {
    let response = await authAPI.register(registerData);
    if(response.status===200){
        dispatch(setUserData(response.data));
        dispatch(setCreatedSuccess)
    } else if (response.status===422) {
        debugger
        setStatus({error: response.data.errors})
        console.log(response.data.errors)
    }
}



export default auth_Reducer
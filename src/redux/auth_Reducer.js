import {authAPI} from "../api/api";


const SET_USER_AUTH = "SET_USER_AUTH";


const initialState = {
    email: "",
    password: "",
    type: 1,

}

const auth_Reducer = (state=initialState,action) => {

    switch (action.type) {

        case SET_USER_AUTH:{
            console.log('buttonAuthClick')
            return {...state,
            ...action.payload,}
        }
        default:
            return state
    }
}

export const setAuthUser = (email,password,type) =>({SET_USER_AUTH,email,password});//this is Action Creator

/*This is Thunk*/
export const getAuthUser = (email,password,type) => async (dispatch) => {

    debugger
   let response = await authAPI.login(email,password,type);
    dispatch(setAuthUser(response.data));
}
export default auth_Reducer
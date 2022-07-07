import {authAPI} from "../api/api";
import Page404 from "../Pages/Page404/Page404";




const SET_USER_DATA = "tour2sky-project/auth/SET_USER_DATA";
const CREATE_SUCCESS = "tour2sky-project/auth/CREATE_SUCCESS";
const SET_USER_TYPE = "tour2sky-project/auth/SET_USER_TYPE";


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

            return {...state,
                createdSuccess:true
            }
        }
        case SET_USER_TYPE:{

            return {
                ...state,
                userType:action.data.data
            }
        }
        default:
            return state
    }
}

export const setUserData = (data) =>({type:SET_USER_DATA,data});//this is Action Creator
export const setCreatedSuccess = () =>({type: CREATE_SUCCESS});//this is Action Creator
export const setUserType = (data) =>({type:SET_USER_TYPE,data});//this is Action Creator

/*This is Thunk*/
export const getAuthUserData = (token) => async (dispatch) => {
    let response = await authAPI.me(token);
    if(response.status===200){
        dispatch(setUserData(response.data));
    } else if (response.status===500){
        return <Page404 />
    }
}
export const getUserType = () => async (dispatch) => {
    let response = await authAPI.getType();
    dispatch(setUserType(response.data))
}
export const createAccount = (registerData,setStatus) => async (dispatch) => {
     try {
       let response = await authAPI.register(registerData);
        if (response.data) {
            dispatch(setCreatedSuccess());
            dispatch(setUserData(response.data));
            setStatus({})}
        else if (response.status===500){
            return <Page404 />
        }
    }
        catch(error) {
        let errors = error.response;
        if(errors.status===422){
        setStatus({error: errors.data.errors})}
    }
}




export default auth_Reducer
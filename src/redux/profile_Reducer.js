import {authAPI, myAccountAPI} from "../api/api";
import Page404 from "../Pages/Page404/Page404";


const SET_CLIENT_PROFILE = "SET_CLIENT_PROFILE";
const SET_AUTH_PROFILE = "SET_AUTH_PROFILE";
const UPDATE_CLIENT_PROFILE = "UPDATE_CLIENT_PROFILE";

const initialState = {

    isAuth: false,
}

const profile_Reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CLIENT_PROFILE: {
            return {
                ...state,
                ...action.data,
                token: action.data.meta.token,
            }
        }
        case SET_AUTH_PROFILE: {
            return {
                ...state,
                isAuth: true
            }
        }
        case UPDATE_CLIENT_PROFILE: {
            return {
                ...state,
                ...action.data
            }
        }

        default:
            return state
    }
}

export const setClientProfile = (data) => ({type: SET_CLIENT_PROFILE, data});
export const setAuthProfile = (data) => ({type: SET_AUTH_PROFILE, data});
export const setUpdateProfile = (data) => ({type: UPDATE_CLIENT_PROFILE, data});

/*This is Thunk*/
export const login = (email, password, type) => async (dispatch) => {
    let response = await authAPI.login(email, password, type);
    if (response.status === 200) {
        dispatch(setClientProfile(response.data));
        dispatch(setAuthProfile())
    } else {
        return <Page404/>
    }
}
export const getUpdateProfile = (updateOption,token) => async (dispatch) => {
    let response = await myAccountAPI.updateProfileInfo(updateOption,token)
    if (response.status === 200) {
        dispatch(setUpdateProfile(response.data));

    } else {
        return <Page404/>
    }
}
export default profile_Reducer
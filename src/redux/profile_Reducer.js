import {authAPI, myAccountAPI} from "../api/api";
import Page404 from "../Pages/Page404/Page404";


const SET_CLIENT_PROFILE = "tour2sky/profile/SET_CLIENT_PROFILE";
const SET_AUTH_PROFILE = "tour2sky/profile/SET_AUTH_PROFILE";
const UPDATE_CLIENT_PROFILE = "tour2sky/profile/UPDATE_CLIENT_PROFILE";
const SET_PROFILE_INFO = "tour2sky/profile/SET_PROFILE_INFO";


const initialState = {
    profileInfo:[],
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
        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: action.data.social_profiles
            }
        }
        default:
            return state
    }
}

export const setClientProfile = (data) => ({type: SET_CLIENT_PROFILE, data});
export const setAuthProfile = (data) => ({type: SET_AUTH_PROFILE, data});
export const setProfileInfo = (data) => ({type: SET_PROFILE_INFO, data});
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
export const getProfileInfo = (token) => async (dispatch) => {
    let response = await authAPI.me(token);
    if (response.status === 200) {
        dispatch(setProfileInfo(response.data))
    } else {
        return <Page404/>
    }
}
export const getUpdateProfile = (updateOption, token) => async (dispatch) => {
    let response = await myAccountAPI.updateProfileInfo(updateOption, token)
    if (response.status === 200) {
        dispatch(setUpdateProfile(response.data));
    } else {
        return <Page404/>
    }
}

export default profile_Reducer
import {authAPI, myAccountAPI} from "../api/api";
import Page404 from "../Pages/Page404/Page404";


const SET_CLIENT_PROFILE = "tour2sky/profile/SET_CLIENT_PROFILE";
const SET_AUTH_PROFILE = "tour2sky/profile/SET_AUTH_PROFILE";
const UPDATE_CLIENT_PROFILE = "tour2sky/profile/UPDATE_CLIENT_PROFILE";
const SET_PROFILE_INFO = "tour2sky/profile/SET_PROFILE_INFO";
const SET_ORDERS_INFO = "tour2sky/profile/SET_ORDERS_INFO";


const initialState = {
    profileInfo:[],
    isAuth: false,
    myOrders: [
        {
            id: 1,
            user_id: 123,
            service_id: 123,
            members_count: 2,
            service_date: "2021-12-25",
            service_time: "09:00:00",
            price: 30,
            status: 1,
            comment: "It's my comment",
            created_at: "2021-12-25 09:30:25",
            updated_at: "2021-12-25 09:30:25",
            currency: {
                id: 1,
                name: "US Dollar",
                code: "USD",
                rate: 28.1,
                status: 1
            },
            service: {
                id: 1,
                name: "Concerts",
                link: "concerts",
                created_at: "2021-12-25 09:30:25",
                price: 30,
                duration: 120,
                description: "Some service description",
                rating: 4.5,
                currency: {
                    id: 1,
                    name: "US Dollar",
                    code: "USD",
                    rate: 28.1,
                    status: 1
                },
                images: {
                    data: [
                        {
                            id: 1,
                            name: "concert-1.jpeg",
                            mime_type: "image/jpeg",
                            link: "http://tour2sky.test/images/service/concert-1.jpeg",
                            thumb: "http://tour2sky.test/images/service/thumb/concert-1.jpeg"
                        }
                    ]
                }
            },
            statusObject: {
                id: 1,
                name: "New"
            }
        }
    ],
    myOrdersMeta: {
        pagination: {
            total: 30,
            count: 2,
            per_page: 15,
            current_page: 1,
            total_pages: 2,
            links: {}
        },
        filters: {
            status: {
                data: [
                    {
                        id: 1,
                        name: "New"
                    }
                ]
            }
        }
    },
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
        case SET_ORDERS_INFO: {
            return {
                ...state,
                myOrders:action.data.data,
                myOrdersMeta:action.data.meta,
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
export const setOrders = (data) => ({type: SET_ORDERS_INFO, data});


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
export const getOrders = (token,page,service_name,status) => async (dispatch) => {
    let response = await myAccountAPI.getProfileOrders(token, page, service_name, status)
    if (response.status === 200) {
        dispatch(setOrders(response.data));
    } else {
        return <Page404/>
    }
}
export default profile_Reducer
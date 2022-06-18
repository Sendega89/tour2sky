import {clientProfileAPI} from "../api/api";


const SET_CLIENT_PROFILE = "SET_CLIENT_PROFILE";


const initialState = {
    id: '1',
    email: "2",
    name: "3",
    surname: "4",
    phone: "5",
    type: '4',
    hobbies: "3",
    about: "2",
    created_at: "1"
}

const profile_Reducer = (state=initialState,action) => {

    switch (action.type) {

        case SET_CLIENT_PROFILE:{
            console.log('buttonClick')
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const setClientProfile = (profile) =>({SET_CLIENT_PROFILE,profile});//this is Action Creator

/*This is Thunk*/
export const getClientProfile = () => async (dispatch) => {

    let response = await clientProfileAPI.getProfileInfo();
    dispatch(setClientProfile(response.data));
}
export default profile_Reducer
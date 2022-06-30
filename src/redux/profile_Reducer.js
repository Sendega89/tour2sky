import {authAPI} from "../api/api";




const SET_CLIENT_PROFILE = "SET_CLIENT_PROFILE";


const initialState = {

}

const profile_Reducer = (state=initialState,action)=>{

    switch (action.type) {

        case SET_CLIENT_PROFILE:{

            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setClientProfile = (data) =>({type:SET_CLIENT_PROFILE,data});

/*This is Thunk*/
export const login = (email, password, type) => async (dispatch) => {
        let response = await authAPI.login(email, password, type);
        if (response.status === 200) {
            dispatch(setClientProfile(response.data))
        } else {
            console.log('else')
        }

}
export default profile_Reducer
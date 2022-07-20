import {adminUser} from "../api/apiAdmin";


const SET_USERS_LIST = "tour2sky/myAccount/SET_USERS_LIST";



const initialState = {
    adminUsersListData:[],
    adminUsersListMeta:{
    pagination:{total:1}
    }
}


const admin_Reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS_LIST: {

            return {
                ...state,
                adminUsersListData:action.data.data,
                adminUsersListMeta:action.data.meta,
                }
            }

        default:
            return state
    }
}

export const setUsersList = (data) => ({type: SET_USERS_LIST, data});


/*This is Thunk*/

export const getUsersList = (page,token) => async (dispatch) => {
    let response = await adminUser.getAdminUsersList(page,token);
    dispatch(setUsersList(response.data))
}

export default admin_Reducer
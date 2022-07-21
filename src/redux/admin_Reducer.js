import {adminPartner, adminUser} from "../api/apiAdmin";


const SET_USERS_LIST = "tour2sky/admin/users/SET_USERS_LIST";
const SET_USER_VIEW = "tour2sky/admin/users/SET_USER_VIEW";

const SET_PARTNERS_LIST = "tour2sky/admin/Partner/SET_PARTNER_LIST";
const SET_PARTNER_VIEW = "tour2sky/admin/Partner/SET_PARTNER_VIEW";


const initialState = {
    adminUsersListData:[],
    adminUsersListMeta:{pagination:{total:1}},
    adminUserView:[],
    adminPartnerListData:[],
    adminPartnerListMeta:{pagination:{total:1,current_page:1}},
    adminPartnerView:[],

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
        case SET_USER_VIEW: {
            return {
                ...state,
                adminUserView:action.data.data,
            }
        }
        case SET_PARTNERS_LIST:{

            return {
                ...state,
                adminPartnerListData:action.data.data,
                adminPartnerListMeta:action.data.meta,
            }
        }
        case SET_PARTNER_VIEW: {
            return {
                ...state,
                adminPartnerView:action.data.data,
            }
        }
        default:
            return state
    }
}

export const setUsersList = (data) => ({type: SET_USERS_LIST, data});
export const setUserView = (data) => ({type: SET_USER_VIEW, data});
export const setPartnersList = (data) => ({type: SET_PARTNERS_LIST, data});
export const setPartnerView = (data) => ({type: SET_PARTNER_VIEW, data});


/*This is Thunk*/

export const getUsersList = (page,token) => async (dispatch) => {
    let response = await adminUser.getAdminUsersList(page,token);
    dispatch(setUsersList(response.data))
}
export const getUserView = (userId,token) => async (dispatch) => {
    let response = await adminUser.getAdminUserView(userId,token);
    dispatch(setUserView(response.data))
}
export const getPartnersList = (page,token) => async (dispatch) => {
    let response = await adminPartner.getAdminPartnersList(page,token);
    dispatch(setPartnersList(response.data))
}
export const getPartnerView = (userId,token) => async (dispatch) => {
    let response = await adminPartner.getAdminPartnersList(userId,token);
    dispatch(setPartnerView(response.data))
}
export default admin_Reducer
import React from "react";
import Authorization from "./Authorization";
import {connect} from "react-redux";
import { getAuthUserData} from "../redux/auth_Reducer";
import {login} from "../redux/profile_Reducer";


function AuthContainer(props) {

    return <Authorization {...props}/>
}

const mapStateToProps = (state) => ({
    isAuth:state.profilePage.isAuth,
    token:state.profilePage.token
});


export default connect(mapStateToProps, {getAuthUserData,login})(AuthContainer);
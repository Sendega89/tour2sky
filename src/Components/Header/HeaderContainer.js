import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth_Reducer";
import {getOutClientProfile} from "../../redux/profile_Reducer";


const HeaderContainer = (props) => {

    return <Header {...props} />
}
const mapStateToProps = (state) => ({
    isAuth: state.profilePage.isAuth,
});
export default connect (mapStateToProps, {getAuthUserData,getOutClientProfile}) (HeaderContainer);
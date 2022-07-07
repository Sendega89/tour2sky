import React from "react";
import CreateAccount from "./CreateAccount";
import {connect} from "react-redux";
import {createAccount, getUserType} from "../redux/auth_Reducer";



const CreateAccountContainer = (props) => {

    return <CreateAccount {...props} />
}
const mapStateToProps = (state) => ({
    createdSuccess:state.auth.createdSuccess,
    userType:state.auth.userType,
})


export default connect(mapStateToProps,{createAccount,getUserType})(CreateAccountContainer)
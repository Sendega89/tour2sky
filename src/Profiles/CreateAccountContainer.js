import React from "react";
import CreateAccount from "./CreateAccount";
import {connect} from "react-redux";
import {createAccount} from "../redux/auth_Reducer";
import MyAccount from "../Pages/MyAccount/MyAccount";


const CreateAccountContainer = (props) => {
if (props.createdSuccess){
    return <MyAccount />
}

    return <CreateAccount {...props} />
}
const mapStateToProps = (state) => ({
    createdSuccess:state.auth.createdSuccess
})


export default connect(mapStateToProps,{createAccount})(CreateAccountContainer)
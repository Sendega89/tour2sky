import React from "react";
import Orders from "./Orders";
import {connect} from "react-redux";
import AuthContainer from "../../../Profiles/AuthContainer";
import {getOrders} from "../../../redux/profile_Reducer";



const OrdersContainer = (props) => {

    return (props.isAuth ? <Orders {...props} /> : <AuthContainer/>

)}

const mapStateToProps =(state) => ({
isAuth:state.profilePage.isAuth,
    orders:state.profilePage.myOrders,
    token:state.profilePage.token,
})
export default connect(mapStateToProps,{getOrders})(OrdersContainer)
import React from "react";
import Bookings from "./Bookings";
import {connect} from "react-redux";
import AuthContainer from "../../../Profiles/AuthContainer";
import {getOrders} from "../../../redux/profile_Reducer";



const BookingsContainer = (props) => {

    return (props.isAuth ? <Bookings {...props} /> : <AuthContainer/>

)}

const mapStateToProps =(state) => ({
isAuth:state.profilePage.isAuth,
    orders:state.profilePage.myOrders,
    token:state.profilePage.token,
    name:state.profilePage.name,
    surname:state.profilePage.surname,
})
export default connect(mapStateToProps,{getOrders})(BookingsContainer)
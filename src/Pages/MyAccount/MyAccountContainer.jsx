import React from "react";
import MyAccount from "./MyAccount";
import {connect} from "react-redux";
import {compose} from "redux";
//import {getClientProfile} from "../../redux/profile_Reducer";


const MyAccountContainer = (props) => {

    return <MyAccount id={props.id}
                      email={props.email}
                      name={props.name}
                      surname={props.surname}
                      phone={props.phone}
                      type={props.type}
                      hobbies={props.hobbies}
                      about={props.about}
                      created_at={props.created_at}
                      getClientProfile={props.getClientProfile}/>
}
const mapStateToProps = (state) => ({
    id:state.profilePage.id,
    email:state.profilePage.email,
    name: state.profilePage.name,
    surname:state.profilePage.surname,
    phone:state.profilePage.phone,
    type: state.profilePage.type,
    hobbies: state.profilePage.hobbies,
    about: state.profilePage.about,
    created_at:state.profilePage.created_at,
})
export default compose(
    connect(mapStateToProps,/*{getClientProfile}*/))(MyAccountContainer)
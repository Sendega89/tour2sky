import React from "react";
import PersonalInfo from "./PersonalInfo";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth_Reducer";
import {getProfileInfo, getUpdateProfile} from "../../redux/profile_Reducer";
import {useEffect} from "react";


const PersonalInfoContainer = (props) => {
    useEffect(()=>{
        props.getProfileInfo(props.token)
    },[])
    return <PersonalInfo id={props.id}
                         email={props.email}
                         name={props.name}
                         surname={props.surname}
                         phone={props.phone}
                         type={props.type}
                         hobbies={props.hobbies}
                         about={props.about}
                         created_at={props.created_at}
                         getAuthUserData={props.getAuthUserData}
                         isAuth={props.isAuth}
                         token={props.token}
                         getUpdateProfile={props.getUpdateProfile}
                         getProfileInfo={props.getProfileInfo}
                         social_profiles={props.social_profiles}
                         />
}
const mapStateToProps = (state) => ({
    id: state.profilePage.id,
    email: state.profilePage.email,
    name: state.profilePage.name,
    surname: state.profilePage.surname,
    phone: state.profilePage.phone,
    type: state.profilePage.type,
    hobbies: state.profilePage.hobbies,
    about: state.profilePage.about,
    created_at: state.profilePage.created_at,
    isAuth: state.profilePage.isAuth,
    token: state.profilePage.token,
    social_profiles:state.profilePage.profileInfo,

})
export default connect(mapStateToProps, {getAuthUserData, getUpdateProfile,getProfileInfo})(PersonalInfoContainer)

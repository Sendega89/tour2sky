import React from "react";
import Authorization from "./Authorization";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/auth_Reducer";
import {login} from "../redux/profile_Reducer";



class AuthContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();

    }

    render() {
        return <Authorization {...this.props}/>
    }
}

const mapStateToProps = (state) => ({});


export default connect(mapStateToProps, {getAuthUserData,login})(AuthContainer);
import s from "../../Admin.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import Partners from "./Partners";
import {connect} from "react-redux";
import {getPartnersList} from "../../../../redux/admin_Reducer";


const PartnersContainer = (props) => {

    return <Partners {...props} />
}
const mapStateToProps = (state) => ({
  token:state.profilePage.token,
    adminPartnerListData:state.admin.adminPartnerListData,
    adminPartnerListMeta:state.admin.adminPartnerListMeta,
})
export default connect(mapStateToProps,{getPartnersList})(PartnersContainer)
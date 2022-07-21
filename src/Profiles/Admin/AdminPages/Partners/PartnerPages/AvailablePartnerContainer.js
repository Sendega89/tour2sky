import AvailablePartner from "./AvailablePartner";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getPartnersList} from "../../../../../redux/admin_Reducer";

const AvailablePartnerContainer = (props) => {

    return  <AvailablePartner {...props}/>
}

const mapStateToProps = (state) => ({
    token:state.profilePage.token,
    adminPartnerListData:state.admin.adminPartnerListData,
    adminPartnerListMeta:state.admin.adminPartnerListMeta.pagination,
})
export default connect(mapStateToProps,{getPartnersList})(AvailablePartnerContainer)
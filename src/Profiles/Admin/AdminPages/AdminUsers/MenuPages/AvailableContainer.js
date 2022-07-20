import Available from "./Available";
import {connect} from "react-redux";
import {getUsersList} from "../../../../../redux/admin_Reducer";
import {useEffect} from "react";


const AvailableContainer = (props) => {


    return <Available {...props}/>

}
const mapStateToProps =(state) =>({
    adminUsersListData:state.admin.adminUsersListData,
    token:state.profilePage.token,
    pagination:state.admin.adminUsersListMeta.pagination,
})

export default connect(mapStateToProps, {getUsersList})(AvailableContainer)
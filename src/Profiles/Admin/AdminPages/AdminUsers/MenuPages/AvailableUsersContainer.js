import AvailableUsers from "./AvailableUsers";
import {connect} from "react-redux";
import {getUsersList} from "../../../../../redux/admin_Reducer";
import EnhancedTable from "./AvailableUsers";



const AvailableUsersContainer = (props) => {


    return <EnhancedTable {...props}/>/*<AvailableUsers {...props}/>*/

}
const mapStateToProps =(state) =>({
    token:state.profilePage.token,
    adminUsersListData:state.admin.adminUsersListData,
    pagination:state.admin.adminUsersListMeta.pagination,
})

export default connect(mapStateToProps, {getUsersList})(AvailableUsersContainer)
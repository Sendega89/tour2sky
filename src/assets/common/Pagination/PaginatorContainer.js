import UsePagination from "./Paginator";
import {connect} from "react-redux";


const PaginatorContainer = (props) => {
/*в пропсах отправляем санку, которую называем getProductCardData */
    return <UsePagination getItemsData={props.getProductCardData}/*in props send Thunk named "getProductCardData" */
                          currentPage={props.currentPage}
                          totalPages={props.totalPages}
                          token={props.token}/>
}
const mapStateToProps = (state) => ({
    token: state.profilePage.token,
})
export default connect(mapStateToProps)(PaginatorContainer)
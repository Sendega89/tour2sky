import UsePagination from "./Paginator";
import {connect} from "react-redux";
import {getProductCardData} from "../../../redux/productCards_Reducer";


const PaginatorContainer = (props) => {

    return <UsePagination {...props} />
}

export default connect(()=>({}),{getProductCardData})(PaginatorContainer)
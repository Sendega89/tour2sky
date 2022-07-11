import Search from "./Search";
import {connect} from "react-redux";
import {getProductItemView} from "../../redux/productItem_Reducer";
import {addRemoveWishlist} from "../../redux/myAccount_Reducer";

const SearchContainer = (props) => {
    return <Search {...props}/>
}
const mapStateToProps = (state) => ({

    pagination: state.productCards.pagination,
    isAuth: state.profilePage.isAuth,
    token: state.profilePage.token,
    productCards: state.productCards,
})
export default connect(mapStateToProps,{getProductItemView, addRemoveWishlist})(SearchContainer)
import MyWishlist from "./MyWishlist";
import {connect} from "react-redux";
import {addRemoveWishlist, getWishList} from "../../../redux/myAccount_Reducer";
import {getProductItemView} from "../../../redux/productItem_Reducer";


const MyWishlistContainer = (props) => {

    let productCardsMaker = (props) => {

        return props.productCards.map(i => i.service)
    }
    return <MyWishlist productCards={productCardsMaker(props)}
                       myAccount={props.myAccount}
                       token={props.token}
                       pagination={props.pagination}
                       isAuth={props.isAuth}
                       getWishList={props.getWishList}
                       addRemoveWishlist={props.addRemoveWishlist}
                       getProductItemView={props.getProductItemView}
    />
}
let mapStateToProps = (state) => ({
    myAccount: state.myAccount,
    token: state.profilePage.token,
    productCards: state.myAccount.wishList.data,
    pagination: state.myAccount.wishList.pagination,
    isAuth: state.profilePage.isAuth,
})
export default connect(mapStateToProps, {getWishList, addRemoveWishlist, getProductItemView})(MyWishlistContainer)
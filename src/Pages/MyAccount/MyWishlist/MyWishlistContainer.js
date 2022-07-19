import MyWishlist from "./MyWishlist";
import {connect} from "react-redux";
import {addRemoveWishlist, getWishList} from "../../../redux/myAccount_Reducer";
import {getProductItemView} from "../../../redux/productItem_Reducer";


const MyWishlistContainer = (props) => {

    const productCardsMaker = (props) => {

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
                       isFavoriteItem={props.isFavoriteItem}
                       name={props.name}
                       surname={props.surname}
    />
}
let mapStateToProps = (state) => ({
    myAccount: state.myAccount,
    token: state.profilePage.token,
    productCards: state.myAccount.wishList.data,
    pagination: state.myAccount.wishList.pagination,
    isAuth: state.profilePage.isAuth,
    isFavoriteItem: state.myAccount.isFavoriteItem,
    name:state.profilePage.name,
    surname:state.profilePage.surname,
})
export default connect(mapStateToProps, {getWishList, addRemoveWishlist, getProductItemView})(MyWishlistContainer)
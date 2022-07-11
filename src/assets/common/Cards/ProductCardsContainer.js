import React from "react";
import {connect} from "react-redux";
import ProductCards from "./ProductCards";
import Preloader from "../../Preloader/Preloader";
import {getProductItemView} from "../../../redux/productItem_Reducer";
import {addRemoveWishlist} from "../../../redux/myAccount_Reducer";



const ProductCardsContainer = (props) => {
if (props.isFetching){return <Preloader/>}

    return <ProductCards /*productCards={props.productCards}*/
                         getProductItemView={props.getProductItemView}
                         token={props.token}
                         isAuth={props.isAuth}
                         addRemoveWishlist={props.addRemoveWishlist}
    />
}
const mapStateToProps = (state) => ({
    isFetching:state.productCards.isFetching,
    productCards:state.productCards,
    token:state.profilePage.token,
    isAuth:state.profilePage.isAuth,
    wishList:state.productCards.wishList

});



export default connect(mapStateToProps,{getProductItemView,addRemoveWishlist})(ProductCardsContainer)
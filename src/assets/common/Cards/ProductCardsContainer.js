import React from "react";
import {connect} from "react-redux";
import ProductCards from "./ProductCards";
import Preloader from "../../Preloader/Preloader";
import {getProductItemView} from "../../../redux/productItem_Reducer";
import {getWishlist} from "../../../redux/myAccount_Reducer";



const ProductCardsContainer = (props) => {
if (props.isFetching){return <Preloader/>}

    return <ProductCards productCards={props.productCards}
                         getProductItemView={props.getProductItemView}
                         token={props.token}
                         isAuth={props.isAuth}
                         getWishlist={props.getWishlist}
    />
}
const mapStateToProps = (state) => ({
    isFetching:state.productCards.isFetching,
    productCards:state.productCards,
    token:state.profilePage.token,
    isAuth:state.profilePage.isAuth,

});



export default connect(mapStateToProps,{getProductItemView,getWishlist})(ProductCardsContainer)
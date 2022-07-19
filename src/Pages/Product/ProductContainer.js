import React, {useEffect} from "react";
import Product from "./Product";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {getProductItemView} from "../../redux/productItem_Reducer";
import {addRemoveWishlist} from "../../redux/myAccount_Reducer";
import {getCreateNewOrder} from "../../redux/profile_Reducer";



const ProductContainer = (props)=> {
    let params = useParams();
    const itemId= params.itemId;
    useEffect(()=> {
        props.getProductItemView(itemId)
    },[params])

    return <Product {...props} />
}
let mapStateToProps =(state) => ({
    pagination: state.productCards.pagination,
    isAuth: state.profilePage.isAuth,
    productCards: state.productCards,
    productItemInfo:state.productItemView,
    categoriesInfo:state.productItemView.categories.data,
    token:state.profilePage.token
})
export default connect(mapStateToProps, {getProductItemView, addRemoveWishlist,getCreateNewOrder})(ProductContainer)
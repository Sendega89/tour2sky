import React, {useEffect} from "react";
import Product from "./Product";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {getProductItemView} from "../../redux/productItem_Reducer";



const ProductContainer = (props)=> {
    let params = useParams();
    const itemId= params.itemId;
    useEffect(()=> {
        props.getProductItemView(itemId)
    },[])

    return <Product {...props} />
}
let mapStateToProps =(state) => ({
    productItemInfo:state.productItemView,
    categoriesInfo:state.productItemView.categories.data,
    token:state.profilePage.token
})
export default connect(mapStateToProps, {getProductItemView})(ProductContainer)
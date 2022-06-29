import React from "react";
import {connect} from "react-redux";
import ProductCards from "./ProductCards";



const ProductCardsContainer = (props) => {


    return <ProductCards productCards={props.productCards}/>
}
const mapStateToProps = (state) => ({

    productCards:state.productCards
});



export default connect(mapStateToProps)(ProductCardsContainer)
import React from "react";
import {connect} from "react-redux";
import ProductCards from "./ProductCards";
import Preloader from "../../Preloader/Preloader";



const ProductCardsContainer = (props) => {
if (props.isFetching){return <Preloader/>}

    return <ProductCards productCards={props.productCards}/>
}
const mapStateToProps = (state) => ({
    isFetching:state.productCards.isFetching,
    productCards:state.productCards
});



export default connect(mapStateToProps)(ProductCardsContainer)
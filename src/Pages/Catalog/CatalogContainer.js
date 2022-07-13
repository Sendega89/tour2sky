import Catalog from "./Catalog";
import {connect} from "react-redux";
import {getFilteredCatalog, getProductCardData} from "../../redux/productCards_Reducer";
import {useEffect} from "react";
import {addRemoveWishlist} from "../../redux/myAccount_Reducer";
import {getProductItemView} from "../../redux/productItem_Reducer";



const CatalogContainer = (props) => {

    useEffect(() => {
        props.getProductCardData();
    },[]);


    return  <Catalog {...props} />
}
const mapStateToProps =(state)=> ({
    amountProductFound:state.productCards.data.length,
    meta:state.productCards.meta,
    pagination:state.productCards.pagination,
    isAuth:state.profilePage.isAuth,
    token:state.profilePage.token,
    productCards:state.productCards,
    isFetching:state.productCards.isFetching,
    isFavoriteItem: state.myAccount.isFavoriteItem,
});

export default connect(mapStateToProps,{getProductCardData,getFilteredCatalog,addRemoveWishlist,getProductItemView})(CatalogContainer)
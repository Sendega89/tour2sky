import Catalog from "./Catalog";
import {connect} from "react-redux";
import {getFilteredCatalog, getProductCardData} from "../../redux/productCards_Reducer";
import {useEffect} from "react";



const CatalogContainer = (props) => {
    useEffect(() => {
        props.getProductCardData();
    },[]);


    return <Catalog {...props} />
}
const mapStateToProps =(state)=> ({
    amountProductFound:state.productCards.data.length,
    meta:state.productCards.meta,
    pagination:state.productCards.pagination,
    isAuth:state.profilePage.isAuth,
    token:state.profilePage.token
});

export default connect(mapStateToProps,{getProductCardData,getFilteredCatalog})(CatalogContainer)
import Catalog from "./Catalog";
import {connect} from "react-redux";
import {getProductCardData} from "../../redux/productCards_Reducer";


const CatalogContainer = (props) => {

    return <Catalog {...props}/>
}
const mapStateToProps =(state)=> ({});

export default connect(mapStateToProps,{getProductCardData})(CatalogContainer)
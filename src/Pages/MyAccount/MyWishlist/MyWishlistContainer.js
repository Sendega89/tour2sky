import MyWishlist from "./MyWishlist";
import {connect} from "react-redux";
import {getWishList} from "../../../redux/myAccount_Reducer";




const MyWishlistContainer =(props) => {


    return <MyWishlist {...props} />
}
let mapStateToProps = (state) => ({
    myAccount:state.myAccount,
    token:state.profilePage.token,
    productCards:state.myAccount,
})
export default connect(mapStateToProps,{getWishList})(MyWishlistContainer)
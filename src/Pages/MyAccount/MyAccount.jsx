import React from "react";
import "./MyAccount.css";
import {NavLink} from "react-router-dom";
import AuthContainer from "../../Profiles/AuthContainer";
import {Helmet} from "react-helmet-async";


const MyAccount = (props) => {
   const editProfile =(e) => {
     e.preventDefault()
       let updateOption = {
           "name": e.target[0].value || props.name,
           "surname": e.target[2].value || props.surname,
           "email": e.target[1].value || props.email,
           "phone": props.phone,
           "hobbies": "hobbies",
           "about": "I`am great",
           "social_profiles": []
       }
props.getUpdateProfile(updateOption,props.token)

   }
/*useEffect(()=>{
   props.getAuthUserData(props.token)
},[]);*/
    return <div>
        <Helmet>
            <title>Tour2sky - My Account</title>
        </Helmet>
        {props.isAuth ?
            <div className={"myAccountPage"}>
                <div className="content">
                    <main>
                        <div className="catalog_item row">
                            <div className="container">
                                <div className="row catalog_row">
                                    <div className="sidebar">
                                        <div className="row wighet">
                                            <h5>Hi, and welcome to <br/> your personal account</h5>
                                            <div className="row wighet_row">
                                                <div className="account_links">
                                                    <ul>
                                                        <li><NavLink className="active" to="/myAccount">
                                                            Account settings</NavLink></li>
                                                        <li><NavLink to="/bookings">Bookings</NavLink></li>
                                                        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog_r">
                                        <div className="row account_settings">
                                            <h4>Account settings</h4>
                                            <div className="row row-15">
                                                <form onSubmit={editProfile}>
                                                    <div className="col-2">
                                                        <div className="account_input">
                                                            <span>First Name</span>
                                                            <input type="text"/>
                                                        </div>
                                                        <div className="account_input">
                                                            <span>E-mail</span>
                                                            <input type="email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div className="account_input">
                                                            <span>Last Name</span>
                                                            <input type="text"/>
                                                        </div>
                                                        <div className="account_button">
                                                            <button type={'submit'}>Save changes</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className={"profileInfo"}>
                                            <h6>Hello User</h6>
                                            <div className="description">
                                                <div className="descriptionItem">
                                                    <span>Client ID - </span>
                                                    <span>{props.id}</span>
                                                </div>
                                                <div className="descriptionItem">
                                                    <span>You email - </span>
                                                    <span>{props.email}</span>
                                                </div>
                                                <div className="descriptionItem">
                                                    <span>You name - </span>
                                                    <span>{props.name}</span>
                                                </div>
                                                <div className="descriptionItem">
                                                    <span>Surname - </span>
                                                    <span>{props.surname}</span>
                                                </div>
                                                <div className="descriptionItem">
                                                    <span>Number of phone - </span>
                                                    <span>{props.phone}</span>
                                                </div>
                                                <div className="descriptionItem">
                                                    <span>Date of registration - </span>
                                                    <span>{props.created_at}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*cat right*/}
                                </div>
                                {/*catalog row */}
                            </div>
                        </div>
                        {/*catalog end*/}
                    </main>
                    {/*Main end*/}
                </div>
                {/*Wrapper End*/}


            </div> : <AuthContainer />}




        {/*content end*/}
</div>

}
export default MyAccount
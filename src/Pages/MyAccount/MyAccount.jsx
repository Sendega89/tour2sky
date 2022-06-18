import React, {useState} from "react";
import Authorization from "../../assets/common/Auth/Authorization/Authorization";
import CreateAccount from "../../assets/common/Auth/CreateAccount/CreateAccount";
import "./MyAccount.css";
import {NavLink} from "react-router-dom";



const MyAccount = (props) => {
    const [auth,setAuth] = useState(true);
    return <div>
        {auth ?
            <div className={"myAccountPage"}>
                <div className="content">
                    {/*Main start*/}
                    <main>
                        {/*catalog start*/}
                        <div className="catalog_item row">
                            <div className="container">
                                {/*catalog row */}
                                <div className="row catalog_row">
                                    {/*Sidebar*/}
                                    <div className="sidebar">
                                        <div className="row wighet">
                                            <h5>Hi, and welcome to <br/> your personal account</h5>
                                            <div className="row wighet_row">
                                                <div className="account_links">
                                                    <ul>
                                                        <li><NavLink className="active" to="/myAccount">Account
                                                            settings</NavLink></li>
                                                        <li><NavLink to="/bookings">Bookings</NavLink></li>
                                                        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Sidebar */}
                                    {/*cat right*/}
                                    <div className="catalog_r">
                                        <div className="row account_settings">
                                            <h4>Account settings</h4>
                                            <div className="row row-15">
                                                <form>
                                                    <div className="col-2">
                                                        <div className="account_input">
                                                            <span>First Name</span>
                                                            <input type="text"/>
                                                        </div>
                                                        <div className="account_input">
                                                            <span>E-mail</span>
                                                            <input type="text"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-2">
                                                        <div className="account_input">
                                                            <span>Last Name</span>
                                                            <input type="text"/>
                                                        </div>
                                                        <div className="account_button">
                                                            <button>Save changes</button>
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
                                                    <span>You hobbies - </span>
                                                    <span>{props.hobbies}</span>
                                                </div>
                                                <div className="descriptionItem">
                                                    <span>Date of registration - </span>
                                                    <span>{props.created_at}</span>
                                                </div>
                                            </div>
<button className={"reloadUserInfo"} onClick={()=> props.getClientProfile}>Reload Client info</button>
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


            </div> : <div>
                <Authorization/>
                <CreateAccount/>
            </div>}

        {/*content end*/}
</div>

}
export default MyAccount
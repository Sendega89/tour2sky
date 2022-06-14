import React from "react";
import Authorization from "../../assets/common/Auth/Authorization/Authorization";
import CreateAccount from "../../assets/common/Auth/CreateAccount/CreateAccount";
import "./MyAccount.css";
const MyAccount = () => {
    return <div className={"myAccount container"}>
        <Authorization />
        <CreateAccount/>
    </div>


}
export default MyAccount
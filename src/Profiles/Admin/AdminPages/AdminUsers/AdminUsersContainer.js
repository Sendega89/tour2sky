import s from "../../Admin.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


const AdminUsersContainer = (props) => {
    return <div className={s.dashboardContent}>
        <div className={s.users}>
            <div><FontAwesomeIcon icon="fa-person-praying"/></div>
            <div>Users</div>
        </div>
        <div className={s.Partners}>
            <div><FontAwesomeIcon icon="fa-person-praying"/></div>
            <div>Partners</div>
        </div>
        <div className={s.Region}>
            <div><FontAwesomeIcon icon="fa-person-praying"/></div>
            <div>Region</div>
        </div>
        <div className={s.Comment}>
            <div><FontAwesomeIcon icon="fa-person-praying"/></div>
            <div>Comment</div>
        </div>
    </div>
}
export default AdminUsersContainer
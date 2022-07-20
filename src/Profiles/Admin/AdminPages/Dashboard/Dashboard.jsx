import s from "./Dashboard.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import partnerImg from "../../../../assets/img/partner.png";
import userImg from "../../../../assets/img/—Pngtree—users vector_3725294.png";
import ordersImg from "../../../../assets/img/Orders.png";
import activityImg from "../../../../assets/img/activityLocation.png";
import lettersImg from "../../../../assets/img/letters.png";
import feedbackImg from "../../../../assets/img/feedback.png";
import regionImg from "../../../../assets/img/region.png";
import {Link} from "react-router-dom";


const Dashboard = (props) => {

    return <div className={s.dashboardContent}>
        <div className={s.users}>
            <div className={s.imgContainer}><img src={userImg} alt="user picture"/></div>
            <div className={s.categoryInfo}><h5>Users</h5>
                <div>New day <span>{props.usersNewInDay} --12</span></div>
                <div>New week<span> {props.usersNewInWeek}15</span></div>
                <div>New Month<span>{props.usersNewInMonth}15</span></div>
                <div>All<span>{props.usersInfo}</span></div>
                <Link to="/admin_cabinet/users">Go Users</Link>
            </div>
        </div>
        <div className={s.Partners}>
            <div className={s.imgContainer}><img src={partnerImg} alt="partner picture"/></div>
            <div className={s.categoryInfo}><h5>Partners</h5>
                <div>New day<span> {props.partnersNewInDay}12</span></div>
                <div>New week <span>{props.partnersNewInWeek}15</span></div>
                <div>New Month <span>{props.partnersNewInMonth}15</span></div>
                <div>All<span> {props.partnerAll}15</span></div>
                <Link to="/admin_cabinet/partners">Go partners</Link>
            </div>
        </div>
        <div className={s.Region}>
            <div className={s.imgContainer}><img src={regionImg} alt="region pic"/></div>
            <div className={s.categoryInfo}><h5>Region</h5>
                <div>New day<span>{props.regionNewInDay}12</span></div>
                <div>New week<span> {props.regionNewInWeek}15</span></div>
                <div>New Month<span> {props.regionNewInMonth}15</span></div>
                <div>All<span> {props.regionsAll}15</span></div>
                <Link to="/admin_cabinet/region_interests">Go Region</Link>
            </div>
        </div>
        <div className={s.Comment}>
            <div className={s.imgContainer}><FontAwesomeIcon icon="fa-person-praying"/></div>
            <div>Comment</div>
        </div>
        <div className={s.Orders}>
            <div className={s.imgContainer}><img src={ordersImg} alt="orders picture"/></div>
            <div className={s.categoryInfo}><h5>Orders</h5>
                <div>New day <span>{props.usersNewInDay} --12</span></div>
                <div>New week<span> {props.usersNewInWeek}15</span></div>
                <div>New Month<span>{props.usersNewInMonth}15</span></div>
                <div>All<span> 15</span></div>
                <Link to="/admin_cabinet/orders">Go Orders</Link>
            </div>
        </div>
        <div className={s.Feedback}>
            <div className={s.imgContainer}><img src={feedbackImg} alt="feedback picture"/></div>
            <div className={s.categoryInfo}><h5>Feedback</h5>
                <div>New day<span> {props.partnersNewInDay}12</span></div>
                <div>New week <span>{props.partnersNewInWeek}15</span></div>
                <div>New Month <span>{props.partnersNewInMonth}15</span></div>
                <div>All<span> {props.partnerAll}15</span></div>
                <Link to="/admin_cabinet/feedback_rating">Go Feedback</Link>
            </div>
        </div>
        <div className={s.Letters}>
            <div className={s.imgContainer}><img src={lettersImg} alt="letters pic"/></div>
            <div className={s.categoryInfo}><h5>Letters</h5>
                <div>New day<span>{props.regionNewInDay}12</span></div>
                <div>New week<span> {props.regionNewInWeek}15</span></div>
                <div>New Month<span> {props.regionNewInMonth}15</span></div>
                <div>All<span> {props.regionsAll}15</span></div>
                <Link to="/admin_cabinet/letters">Go Letters</Link>
            </div>
        </div>
        <div className={s.Activity}>
            <div className={s.imgContainer}><img src={activityImg} alt="activity pic"/></div>
            <div className={s.categoryInfo}><h5>Activity</h5>
                <div>New day<span>{props.regionNewInDay}12</span></div>
                <div>New week<span> {props.regionNewInWeek}15</span></div>
                <div>New Month<span> {props.regionNewInMonth}15</span></div>
                <div>All<span> {props.regionsAll}15</span></div>
                <Link to="/admin_cabinet/activity_location">Go Activity</Link>
            </div>
        </div>

    </div>
}
export default Dashboard

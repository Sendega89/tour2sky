import React from "react";
import s from "../AdminUsers.module.css"
import PaginatorContainer from "../../../../../assets/common/Pagination/PaginatorContainer";
import {useEffect} from "react";




const Available = (props) => {
    useEffect(() => {
        props.getUsersList(props.pagination.current_page,props.token)
    },[]);
    return <div className={s.usersAvailable_Container}>
        <div><h4>Name</h4></div>
        <div><h4>Orders</h4></div>
        <div><h4>Email</h4></div>
        <div><h4>Phone</h4></div>
        <div><h4>Create</h4></div>
        <div><h4>Activation</h4></div>
        <div><h4>Subscribe</h4></div>
        <div><h4>Partner</h4></div>
        {/*<div><h4>Func</h4></div>*/}
        {props.adminUsersListData.map(user=> <UsersInfoCards name={user.full_name}
                                                            orders={user.order_count}
                                                            email={user.email}
                                                            phone={user.phone}
                                                            create_date={user.created_at}
                                                            activation={user.statusObject.name}
                                                            subscribe={user.subscribe_news}
                                                            partner={user.partner}/>)}
        <div className={s.paginationContainer}>
                <PaginatorContainer totalItemCount={props.pagination.total}
                                    pageSize={props.pagination.count}
                                    currentPage={props.pagination.current_page}
                                    totalPages={props.pagination.total_pages}
                                    links={props.pagination.links}
                                    getProductCardData={props.getUsersList}
                />
        </div>
    </div>
}
export const UsersInfoCards = (props) => {
    return <>
        <div className={s.usersAvailable_item}>{props.name}</div>
        <div className={s.usersAvailable_item}>{props.orders}</div>
        <div className={s.usersAvailable_item}>{props.email}</div>
        <div className={s.usersAvailable_item}>{props.phone}</div>
        <div className={s.usersAvailable_item}>{props.create_date}</div>
        <div className={s.usersAvailable_item}>{props.activation}</div>
        <div className={s.usersAvailable_item}>{props.subscribe}</div>
        <div className={s.usersAvailable_item}>{props.partner}</div>
    </>
}

export default Available


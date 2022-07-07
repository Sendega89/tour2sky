import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import {useState} from "react";


const List = styled('ul')({
    display:"flex",
    justifyContent:"center",
    padding: "24px 0 54px 0",
    marginTop: "28px",
    borderTop: "1px solid #ecf0f1",
    textAlign: "center",
    fontSize: "22px",
    "& li":{
        display: "inline-block"
    },
    "& li a":{
        paddingTop: "7px",
display: "inline-block",
border: "1px solid #ECF0F1",
margin:" 0 4px",
borderRadius: "50%",
width: "48px",
height: "48px",
textAlign: "center",
color: "#B6C2CC",
backgroundImage: "none",
    },
    "& li a:hover":{
    boxShadow: "0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)",
    backgroundColor: "#ffffff",
    color: "#2980b9",
    cursor: "pointer",
    textDecoration: "none",
    transition: "0.5s",
    "& li a.active": {
    boxShadow: "0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)",
    backgroundColor: "#ffffff",
    color: "#2980b9",
    cursor: "pointer",
    textDecoration: "none",
    transition: "0.5s",
}
}

})
/*
totalItemCount={props.pagination.total}
pageSize={props.pagination.count}
currentPage={props.pagination.current_page}
totalPages={props.pagination.total_pages}
links={props.pagination.links}
*/

export default function UsePagination(props) {
const [clickPage,setClickPage] = useState(props.currentPage)

    const handleChange =(event) => {

        props.getProductCardData(event.target.name);
        setClickPage(props.currentPage)
    }
    const { items } = usePagination({
        count:props.totalPages,
        hidePrevButton:true,
        hideNextButton:true,
        page:props.currentPage||null,
        onChange:handleChange,

    });

    return (
        <nav>
            <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <a name={page}
                                type="button"
                                style={{
                                    boxShadow:selected ?  "0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)": undefined,
                                    backgroundColor:selected ?  "#ffffff": undefined,
                                    color:selected ?  "#2980b9": undefined,
                                    cursor:selected ?  "pointer": undefined,
                                    textDecoration:selected ?  "none": undefined,
                                    transition:selected ?  "0.5s": undefined,
                                    fontWeight: selected ? '' : undefined,
                                }}
                                {...item}
                            >
                                {page}
                            </a>
                        );
                    } else {
                        children = (
                            <a type="button" {...item}>
                                {type}
                            </a>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </List>
        </nav>
    );
}









/*My pagination start*/
/*function Paginator({totalItemCount,pageSize,currentPage,totalPages,links}) {
    let pagesCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = portionNumber * pageSize;


    return <ul id="pagination">

       {/!* {portionNumber > 1 &&
            <li>
                <a onClick={() => {
                    setPortionNumber(portionNumber - 1)
                        }}>
                    Prev
                </a>
            </li>}*!/}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return  <li
                    key={Math.random() + pages}
                      onClick={() => {

                      }
                      }>
                    <a className={currentPage === p ? undefined : "active"} >{p}</a> </li>
            })}
       {/!* {portionCount > portionNumber &&
            <li>
            <a onClick={() => {setPortionNumber(portionNumber + 1)}}>
                Next
            </a>
            </li>

        }*!/}

    </ul>

}
export default Paginator;*/
/*My pagination end*/






import React, {useState} from "react";



function Paginator({onPageChanged, currentPage, totalUsersCount, pageSize}) {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / pageSize);
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = portionNumber * pageSize;


    return <ul id="pagination">

       {/* {portionNumber > 1 &&
            <li>
                <a onClick={() => {
                    setPortionNumber(portionNumber - 1)
                        }}>
                    Prev
                </a>
            </li>}*/}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return  <li
                    key={Math.random() + pages}
                      onClick={() => {
                      onPageChanged(p)
                      }
                      }>
                    <a className={currentPage === p && "active"} >{p}</a> </li>
            })}
       {/* {portionCount > portionNumber &&
            <li>
            <a onClick={() => {setPortionNumber(portionNumber + 1)}}>
                Next
            </a>
            </li>

        }*/}

    </ul>

}

export default Paginator;







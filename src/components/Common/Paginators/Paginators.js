import React, {useState} from "react";
import styles from "./paginator.module.css";


let Paginators = ({portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Previous
        </button>

        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)

            .map(p => {
                return <span className={

                    props.currentPage === p ? styles.selectedPage + " " + styles.pageNumber : styles.pageNumber}

                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>

            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>Next
        </button>

        }

    </div>


}


export default Paginators;




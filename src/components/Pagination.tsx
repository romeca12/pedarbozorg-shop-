import { useState } from "react"

type IPropsPagination = {
    count: number,
    changePge: (newPage: number) => void,
    currentPage: string
}
const Pagination = ({ count, changePge, currentPage }: IPropsPagination) => {
    const [statusPage, SetStatusPage] = useState({ newPage: 0, id: 0 })
    const handleChangePage = (newPage: number, id?: number) => {
        changePge(newPage)
        SetStatusPage({ newPage, id: id || 0 })
    }
    console.log(statusPage)
    const allPages = count / 12
    const NumberCurrentPage = Number(currentPage)
    const spaceOne = [1, 2, 3].includes(NumberCurrentPage);
    const spaceTwo = [allPages, allPages - 1, allPages - 2].includes(NumberCurrentPage);

    return (
        <div className="flex justify-center items-center gap-2 h-10 text-primary text-sm md:text-base cursor-pointer">
            <img src="/images/arrow-right-slider.svg" alt="جهت راست" className={`w-5 h-5 mx-1.5 ${NumberCurrentPage <= 1 ? "hidden" : "block"}`}
                onClick={() => {
                    if (NumberCurrentPage <= 1) return
                    handleChangePage(NumberCurrentPage - 1)
                }} />

            <span className={`tab-navigation ${NumberCurrentPage === 1 ? "active-tab-navigation" : ""}`} onClick={() => handleChangePage(1)}>۱</span>
            {!spaceOne && <span className="tab-navigation">{NumberCurrentPage === 4 ? 2 : "..."}</span>}


            {NumberCurrentPage >= 3 ? <span className={`tab-navigation`} onClick={() => handleChangePage(NumberCurrentPage - 1, 2)}>{NumberCurrentPage >= 3 ? NumberCurrentPage - 1 : ""}</span> : <span className={`tab-navigation ${NumberCurrentPage === 2 ? "active-tab-navigation" : ""}`} onClick={() => handleChangePage(2, 2)}>2</span>}


            {NumberCurrentPage >= 3 ? <span className={`tab-navigation ${NumberCurrentPage ? "active-tab-navigation" : ""}`} onClick={() => handleChangePage(NumberCurrentPage)}>{NumberCurrentPage}</span> : null}


            <span className={`tab-navigation`} onClick={() => {
                if (NumberCurrentPage >= 2) {
                    handleChangePage(NumberCurrentPage + 1)

                } else {
                    handleChangePage(NumberCurrentPage + 2)
                }
            }} >{NumberCurrentPage < 2 
                ? NumberCurrentPage >= 2 ? "": NumberCurrentPage + 2
                : NumberCurrentPage + 1 <= 13 ? NumberCurrentPage + 1 : ""}</span>


            {!spaceTwo && <span className="text-base">...</span>}
            <span className={`tab-navigation ${allPages === NumberCurrentPage ? "active-tab-navigation" : ""}`} onClick={() => handleChangePage(allPages)}>{allPages}</span>

            <img src="/images/arrow-left-slider.svg" alt="جهت چپ" className={`w-5 h-5 mx-1.5 ${NumberCurrentPage >= allPages ? "hidden" : "block"}`}
                onClick={() => {
                    if (NumberCurrentPage >= allPages) return
                    handleChangePage(NumberCurrentPage + 1)
                }}
            />
        </div>

    )
}

export default Pagination
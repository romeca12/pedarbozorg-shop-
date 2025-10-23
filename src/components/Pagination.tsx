import { Dispatch, SetStateAction } from "react"


type IPropsPagination = {
    count: number,
    // handleChangePage: (newPage: number) => void,
    handleChangePage: Dispatch<SetStateAction<number>>,
    currentPage: string
}

const Pagination = ({ count, handleChangePage, currentPage }: IPropsPagination) => {
    const allPages = Math.ceil(count / 12)
    const NumberCurrentPage = Number(currentPage)
    const spaceOne = [1, 2, 3, 4].includes(NumberCurrentPage);
    const spaceTwo = [allPages, allPages - 1, allPages - 2, allPages - 3].includes(NumberCurrentPage);

    return (
        <div className="flex justify-center items-center gap-2 h-10 text-primary text-sm md:text-base cursor-pointer">
            <img src="/images/arrow-right-slider.svg" alt="جهت راست" className={`w-5 h-5 mx-1.5 ${NumberCurrentPage <= 1 ? "hidden" : "block"}`}
                onClick={() => {
                    if (NumberCurrentPage <= 1) return
                    handleChangePage(NumberCurrentPage - 1)
                }} />

            <span className={`tab-navigation ${NumberCurrentPage === 1 ? "active-tab-navigation" : ""}`} onClick={() => handleChangePage(1)}>1</span>

            {!spaceOne ? <span onClick={() => handleChangePage(2)}>...</span>
                : NumberCurrentPage === 4 ? <span className={`tab-navigation`} onClick={() => handleChangePage(2)}>2</span> : null
            }

            {NumberCurrentPage <= 2 ? <span className={`tab-navigation ${NumberCurrentPage === 2 ? "active-tab-navigation" : ""}`} onClick={() => handleChangePage(2)}>2</span>
                : NumberCurrentPage === allPages ? <span className={`tab-navigation`} onClick={() => handleChangePage(NumberCurrentPage - 2)}>{NumberCurrentPage - 2}</span>
                    : <span className={`tab-navigation`} onClick={() => handleChangePage(NumberCurrentPage - 1)}>{NumberCurrentPage - 1}</span>}

            {NumberCurrentPage >= 3 && NumberCurrentPage <= allPages - 2 ? <span className={`tab-navigation ${NumberCurrentPage ? "active-tab-navigation" : ""}`} onClick={() => handleChangePage(NumberCurrentPage)}>{NumberCurrentPage}</span> : null}

            {NumberCurrentPage < 2 ?
                <span className={`tab-navigation`}
                    onClick={() => handleChangePage(NumberCurrentPage + 2)}>
                    {NumberCurrentPage >= 2 ? "" : NumberCurrentPage + 2}</span>
                : NumberCurrentPage < allPages - 1 ? <span className={`tab-navigation`}
                    onClick={() => handleChangePage(NumberCurrentPage + 1)}>
                    {NumberCurrentPage + 1}</span>
                    : NumberCurrentPage === allPages ? <span className={`tab-navigation`}
                        onClick={() => handleChangePage(NumberCurrentPage - 1)}>
                        {NumberCurrentPage - 1}</span>
                        : <span className={`tab-navigation ${NumberCurrentPage === allPages - 1 ? "active-tab-navigation" : ""}`}
                            onClick={() => handleChangePage(NumberCurrentPage)}>
                            {NumberCurrentPage}</span>
            }



            {!spaceTwo ? <span onClick={() => handleChangePage(2)}>...</span>
                : NumberCurrentPage === allPages - 3 ? <span className={`tab-navigation`} onClick={() => handleChangePage(allPages - 1)}>{allPages - 1}</span> : null
            }

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
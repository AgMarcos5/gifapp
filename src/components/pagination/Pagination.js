import React from 'react'
import './pagination.scss'

export const Pagination = ({page, setPage, lastPage}) => {

    const prevPage = () => {
        if(page>1){
            setPage(page-1)
        }
    }

    const nextPage = () => {
        if(page<lastPage){
            setPage(page+1)
        }
        
    }


    return (
        <div className="pagination_container menu">
            <button className={page === 1 ? 'disable' : ''} onClick={prevPage}></button>
            <div className="page">Página <span className='page_color'><span>{page}</span> de <span>{lastPage}</span></span></div>
            <button className={page === lastPage ? 'disable' : ''} onClick={nextPage}></button>
        </div>
  )
}

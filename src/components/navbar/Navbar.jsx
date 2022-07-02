import React from 'react'
import { CategoryList } from '../category/CategoryList'
import { Pagination } from '../pagination/Pagination'
import './navbar.scss'

export const Navbar = ({page,setPage,lastPage,selectedCategory}) => {
  return (
    <nav>
    {
      selectedCategory ?
      (
        <>
        <CategoryList/>
        <Pagination page={page} setPage={setPage} lastPage={lastPage}/>
        </>
      )
      :
      (<></>)
    }
      
    </nav>
  )
}

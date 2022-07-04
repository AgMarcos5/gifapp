import React from 'react'
import { CategoryList } from '../category/CategoryList'
import { Pagination } from '../pagination/Pagination'
import {Link} from 'react-router-dom'
import './navbar.scss'
import favoritos from '../../assets/favs.png'

export const Navbar = ({page,setPage,lastPage,selectedCategory, changeCategory}) => {
  return (
    <nav>
        <div className='nav_buttons'>
          <div className='favs' onClick={() => changeCategory(null)}><Link to="/favourites"><span>Favoritos</span> <img src={favoritos} alt="favoritos"/></Link></div>
          <CategoryList/>
        </div>
        { selectedCategory && <Pagination page={page} setPage={setPage} lastPage={lastPage}/> }
    </nav>
  )
}

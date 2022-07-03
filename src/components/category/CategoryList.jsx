import React from 'react'
import useCategories from '../../hooks/useCategories';
import './categoryList.scss'
import {Link} from 'react-router-dom'

export const CategoryList = () => {

    const {categories,selectedCategory,removeCategory,resetCategories, changeCategory} = useCategories();

  return (
    <div className='ca_list'>
      <div className="ca_text">Últimas búsquedas:</div>
      <div className="categories_container">
              {categories.map(option => 
                <>
                  <div key={option} className={`ca_option ${option === selectedCategory ? 'active' : ''}`} >
                      <Link to="/">
                          <div className="option_text" onClick={() => changeCategory(option)}>{option}</div> 
                      </Link>
                      <div className="close" onClick={() => removeCategory(option)}></div>
                  </div>
                  
                </>
              )}
              {categories.length > 0 && <div className="reset" onClick={resetCategories}><span>borrar todos</span></div>}
      </div>
    </div>
  )
}

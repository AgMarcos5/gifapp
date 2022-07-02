import React from 'react'
import useCategories from '../../hooks/useCategories';
import './categoryList.scss'

export const CategoryList = () => {

    const {categories,selectedCategory,removeCategory,resetCategories, changeCategory} = useCategories();

  return (
    <div className='ca_list'>
      <div className="ca_text">Últimas búsquedas:</div>
      <div className="categories_container">
              {categories.map(option => 
                <>
                  <div key={option} className={`ca_option ${option === selectedCategory ? 'active' : ''}`} >
                      <div className="option_text" onClick={() => changeCategory(option)}>{option}</div> 
                      <div className="close" onClick={() => removeCategory(option)}></div>
                  </div>
                </>
              )}
              <div className="reset" onClick={resetCategories}><span>borrar todos</span></div>
      </div>
    </div>
  )
}

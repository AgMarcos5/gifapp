import React from 'react'
import useCategories from '../../hooks/useCategories';
import './categoryList.scss'

export const CategoryList = () => {

    const {categories,selectedCategory,removeCategory,changeCategory} = useCategories();

  return (
    <div className='ca_list'>
      <div className="ca_text">Últimas búsquedas:</div>
      <div className="categories_container">
              {categories.map(option => 
                <>
                  <div key={option} className={`ca_option ${option === selectedCategory ? 'active' : ''}`} onClick={() => changeCategory(option)}>
                      <span>{option}</span> 
                  </div>
                  <div onClick={() => removeCategory(option)}>eliminar</div>
                </>
              )}
      </div>
    </div>
  )
}

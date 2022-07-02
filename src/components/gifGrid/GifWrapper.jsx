import React, { useEffect, useRef, useState } from 'react'

import './gifgrid.scss'
import { Navbar } from '../navbar/Navbar';
import { GifList } from './GifList';
import useApi from '../../hooks/useApi';
import useCategories from '../../hooks/useCategories';
import { NoGifs } from './NoGifs';

export const GifWrapper = () => {

  const {categories,selectedCategory} = useCategories();

  const [page,setPage] = useState(1);
  const [lastPage,setLastPage] = useState(1);
  

  return (
    <section className='gif_container'>
        <Navbar page={page} setPage={setPage} lastPage={lastPage}/>
        {selectedCategory ?(
          <>
          
          {
            categories.map( category => (
              <GifList category={category} active={selectedCategory} page={page} setPage={setPage} setLastPage={setLastPage}/>
            ))
          }
          </>
        ) :
        (
          <NoGifs/>
        )}
        
     
    
      
    </section>
  )
}

/*
return (
    <section className='gif_container'>
    {
      categories.length > 0 ? 
      (
      <>
        <Navbar page={page} setPage={setPage} lastPage={lastPage}/>
        {
          categories.map( category => (
            <GifList category={category} active={selectedCategory} page={page} setPage={setPage} setLastPage={setLastPage}/>
          ))
        }
      </>  
      ) : 
      (<GifList category="random" active={selectedCategory} page={page} setPage={setPage} setLastPage={setLastPage}/>)
    }
      
    </section>
  )
*/
import React from 'react'
import { GifList } from './GifList'
import { NoGifs } from './NoGifs'

import './gifgrid.scss'

export const GifGrid = ({selectedCategory,categories,page,setPage,setLastPage}) => {
  return (
    <>
    {selectedCategory ?(
      <>
      {
        categories.map( category => (
          <GifList key={category} category={category} active={selectedCategory} page={page} setPage={setPage} setLastPage={setLastPage}/>
        ))
      }
      </>
    ) :
    (
      <NoGifs/>
    )}
    </>
  )
}

import React, { useState } from 'react'
import './gifwrapper.scss'

import { Navbar } from '../navbar/Navbar';
import useCategories from '../../hooks/useCategories';
import { GifGrid } from './GifGrid';
import { Routes, Route } from 'react-router-dom';
import { Favourites } from '../favourites/Favourites';

export const GifWrapper = () => {

  const {categories,selectedCategory,changeCategory} = useCategories();
  const [page,setPage] = useState(1);
  const [lastPage,setLastPage] = useState(1);
  

  return (
    <section className='gif_container'>
        <Navbar page={page} setPage={setPage} lastPage={lastPage} changeCategory={changeCategory} selectedCategory={selectedCategory}/>
        <Routes>
          <Route path="/" element={<GifGrid selectedCategory={selectedCategory} categories={categories} page={page} setPage={setPage} setLastPage={setLastPage}/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
    </section>
  )
}

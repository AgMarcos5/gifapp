import React from 'react'
import './header.scss'

import video from '../../assets/video2.mp4'
import { AddCategory } from '../category/AddCategory'

export const Header = () => {



  return (
    <header>
      <div className='title_container'>
        <div className='banner'>
            <video autoPlay muted loop>
              <source src={video} type="video/mp4"/>
            </video>
            <h1>Gif</h1>
          </div>
        <h1 className='outline'>App</h1>
      </div>
        
        <p>Busca gifs y guarda tus favoritos</p>
        <AddCategory/>
    </header>
  )
}

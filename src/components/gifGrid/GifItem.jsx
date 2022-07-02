import React from 'react'
import './gifitem.scss'

export const GifItem = ({url, title}) => {
  return (
    <div className='gif_item'>
     <img src={url} alt={title}/>
    </div>
  )
}

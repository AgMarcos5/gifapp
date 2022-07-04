import React from 'react'
import useFavourites from '../../hooks/useFavourites'
import { GifItem } from '../gifGrid/gifItem/GifItem';
import { NoGifs } from '../gifGrid/NoGifs';

export const Favourites = () => {

  const {favourites,addFavourite} = useFavourites();

  return (
    <>
      {
        favourites.length ? (
          <div className="gif_grid masonry active">
          {
            favourites.map( img => (
              <GifItem 
                key={img.id}
                id={img.id}
                title={img.title} 
                url={img.url}
              />
            ))
          }
          </div>
        ) :
        (<NoGifs/>)
      }
    
    </>
    
  )
}

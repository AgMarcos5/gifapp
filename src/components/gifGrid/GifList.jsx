import React, { useEffect } from 'react'
import useApi from '../../hooks/useApi';
import { GifItem } from './GifItem';
import { NoGifs } from './NoGifs';

export const GifList = ({category, active, page, setPage, setLastPage}) => {
  
  const {data, loading, pages, maxGifs} = useApi(category);

  useEffect( () => {
    if(active === category){
      setPage(1);
      setLastPage(pages);
    }
  },[active,pages])

  return (
    <>
        <div className={`gif_grid masonry ${category === active ? 'active' : ''}`}>
        {
          loading ?
          (<h1 className='loading'>Cargando...</h1>)
          :
          data.length ? 
          (data
            .slice( (page-1)*maxGifs , (page-1)*maxGifs + maxGifs )
            .map( img => (
              <GifItem 
                key={img.id}
                title={img.title} 
                url={img.url}
              />
            ))
          )
          :
          (<NoGifs/>)
            
        }
      </div>
    </>
  )
}

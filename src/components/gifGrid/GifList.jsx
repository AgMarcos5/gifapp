import React, { useEffect } from 'react'
import useApi from '../../hooks/useApi';
import { GifItem } from './gifItem/GifItem';
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
    {
      loading && active === category ?
      (<h1 className='loading'>Cargando...</h1>)
          :
      (
          data.length ? 
          (
            <div className={`gif_grid masonry ${category === active ? 'active' : ''}`}>
            {
              data
              .slice( (page-1)*maxGifs , (page-1)*maxGifs + maxGifs )
              .map( img => (
                <GifItem 
                  key={img.id}
                  id={img.id}
                  title={img.title} 
                  url={img.url}
                />
              ))
            }
            </div>
          )
          :
          (<div className={`gif_grid ${category === active ? 'active' : ''}`}><NoGifs/></div>)
      )
    }
    </>
  )

}

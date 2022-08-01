import React from 'react'
import img from '../../assets/nohaygifs.png'

export const NoGifs = () => {
  return (
    <div className="nogifs" data-testid="nogifs">
        <img src={img} />
    </div>
  )
}

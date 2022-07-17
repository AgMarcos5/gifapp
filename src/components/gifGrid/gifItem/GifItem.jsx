import React, { useState } from 'react'
import './gifitem.scss'
import open from '../../../assets/open.png'
import { Modal } from './Modal'

import PropTypes from 'prop-types'

export const GifItem = ({id,url, title}) => {

  const [modalState, setModalState] = useState(false)

  return (
    <>
    <div className='gif_item'>
      <div className='hover_button' onClick={() => setModalState(id)}>
          <img src={open} alt="open gif" />
      </div>
      <img className="gif_image" data-testid="gif" src={url} alt={title}/>
    </div>
    <Modal id={id} url={url} title={title} modalState={modalState} setModalState={setModalState}/>
    </>
  )
}

GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string
}
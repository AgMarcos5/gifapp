import React, { useEffect, useState } from 'react'
import useFavourites from '../../../hooks/useFavourites'
import './modal.scss'
import {ReactComponent as Star} from '../../../assets/star.svg'
import {ReactComponent as Close} from '../../../assets/close.svg'

import { motion, AnimatePresence } from "framer-motion"

export const Modal = ({id,title,url, modalState,setModalState}) => {

    const {favourites,addFavourite,removeFavourite} = useFavourites()
    const [isFav,setIsFav] = useState(false);


    useEffect( () => {
        if(favourites.find(fav => fav.id === id))
        {
            setIsFav(true)
        }
        else
        {
            setIsFav(false)
        }
    },[favourites])

    const data = {
        id,
        title,
        url
    }

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    
      const variantsContainer = {
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: .1 },
      }
    
  return (
    <>
        {
            modalState &&
            <div className='modal'>
            
            <AnimatePresence>
            <motion.div
                key="modal"
                initial="hidden"
                animate="visible"
                variants={variants}
                exit={{ opacity: 0 }}
            >
                <div className='modal_background'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ type: "spring", bounce: 0.25 }}
                    variants={variantsContainer}
                >
                    <div className='modal_container'>
                        <div className='title'>
                            <div className='title_info'>
                                <h3>{title}</h3>
                                <div className='fav_button'>
                                {
                                    isFav ?
                                    (<button onClick={() => removeFavourite(data)} className="remove"><Star/></button>)
                                    :
                                    (<button onClick={() => addFavourite(data)}><Star/></button>)
                                }
                                </div>
                            </div>
                            <div className='close_button'><button  onClick={()=>setModalState(null)}><Close/></button></div>
                           
                        </div>
                            <img className="modal_gif" src={url} alt={title}/>
                    </div>
                </motion.div>
                </div>
            </motion.div>
            </AnimatePresence>   
            </div> 
        }    
       
    </>
  )
}

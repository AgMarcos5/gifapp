import React from 'react'
import './header.scss'

import video from '../../assets/video2.mp4'
import { AddCategory } from '../category/AddCategory'

import {useViewportScroll, motion, useTransform, AnimatePresence} from 'framer-motion'

export const Header = () => {

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);


  return (
    <>
    
    <header>
    
        <AnimatePresence>
        <div className='title_container'>
         
          <div className='banner'>
            <video autoPlay muted loop>
              <source src={video} type="video/mp4"/>
            </video>
            <h1>Gif</h1>
          </div>
          <motion.div 
            initial={{opacity:0, x: -50}} animate={{ opacity:1, x: 0 }}  transition={{ x: { type: "spring", stiffness: 100, duration:1 },default: { duration: .5 }}}>
          <h1 className='outline'>App</h1>
          </motion.div>
        </div>
       
        <motion.div
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{ duration: .5, type: "easeIn" }}
        >
        <p>Busca gifs y guarda tus favoritos</p>
        <AddCategory/>

        </motion.div>
        </AnimatePresence>
        <motion.div 
        className="header" style={{y: y1}} 
        transition={{ duration: 2, ease: 'easeOut' }} />
    </header>
    </>
  )
}

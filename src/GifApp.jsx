import React from 'react'
import { Footer } from './components/footer/Footer';
import { GifWrapper } from './components/gifGrid/GifWrapper';
import { Header } from './components/header/Header';
import AppContext from './context/categoryContext';

import './styles/global.scss'

export const GifApp = () => {
  return (
    <>
    <AppContext>
      <Header/>
      <GifWrapper/>
      <Footer/>
    </AppContext>
    </>
  );
}

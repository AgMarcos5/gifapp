import React, { useState } from 'react'
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
    </AppContext>
    </>
  );
}

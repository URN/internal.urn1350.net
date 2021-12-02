import React from 'react';

import Header from '../components/header';
import {ThemeProvider} from '@material-ui/styles';
import theme  from '../theme';
import Settings from '../settings.json';
import ImageHeader from '../components/index/imageHeader';
import Footer from '../components/footer';
import { CssBaseline } from '@material-ui/core';
import "../styles/style.scss";

import {LoremIpsum} from 'react-lorem-ipsum';


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Header title={Settings.siteTitle}/>
    <ImageHeader/>
    <main>
   <LoremIpsum p={10}/>
    </main>
    <Footer/>
    </ThemeProvider>
  )
}

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
   <h1>University Radio Nottingham Internal Webpage</h1>
   <a href="https://wiki.i.urn1350.net">URN Internal Wiki</a>

   <h2>Some Guides you may need</h2>
   <LoremIpsum p={2} />
    </main>
    <Footer/>
    </ThemeProvider>
  )
}

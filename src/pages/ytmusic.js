import React from 'react';

import Header from '../components/header';
import {ThemeProvider} from '@material-ui/styles';
import theme  from '../theme';
import Settings from '../settings.json';
import Footer from '../components/footer';
import { CssBaseline, Typography } from '@material-ui/core';
import "../styles/style.scss";

import Queue from '../components/ytmusic/queue';
import AddToQueue from '../components/ytmusic/add_to_queue';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Header title={Settings.siteTitle}/>
    <main>
   <Typography gutterBottom variant="h1" component="div" key="title" className="h">Youtube Music Downloader</Typography>
<p>This program searches Youtube Music for songs and will download them into the music library (in a queue)</p>
<p><b>If it cannot find a song, you'll have to add it otherwise. We (the tech team) cannot add songs to this</b></p>


    <AddToQueue />
      <Queue/>
      
    </main>
    <Footer/>
    </ThemeProvider>
  )
}

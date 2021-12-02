
import React from 'react';

import Header from '../components/header';
import {ThemeProvider} from '@material-ui/styles';
import theme  from '../theme';
import Settings from '../settings.json';
import ImageHeader from '../components/index/imageHeader';
import Footer from '../components/footer';
import { CssBaseline } from '@material-ui/core';
import "../styles/style.scss";


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Header title={Settings.siteTitle}/>
    <ImageHeader/>   
   <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <a href="/">Go home</a>.
      </p>

    </main>
    <Footer/>
    </ThemeProvider>
  )
}

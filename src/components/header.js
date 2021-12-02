import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Settings from '../settings.json';
  
  export default class Header extends React.Component {
    render() {
      return (
        <>
          <Box>
      <AppBar position="static" component="div">
        <Toolbar>
          <Typography variant="h6" component="span" className="title">
            <img src={`${Settings.cdnUrl}/content/images/logo.png`} />
            <a href="/" className="h"> {Settings.siteTitle}</a>
          </Typography>
        </Toolbar>
        </AppBar>
        <AppBar color="secondary" position="static" component="nav">
            <Toolbar>
            <Button href="/">Internal Homepage</Button>
            <Button href="https://urn1350.net/">Public Homepage</Button>
            <Button href="/ytmusic">Youtube Music Downloader</Button>
        </Toolbar>
    
      </AppBar>
    </Box>
        </>
      );
    }
}
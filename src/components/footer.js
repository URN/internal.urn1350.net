import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Settings from '../settings.json';
  
  export default class Header extends React.Component {
    render() {
      return (
      <AppBar color="primary" position="static" component="footer">
        <div>
            <strong>&copy; URN 2021</strong><br/>
            University Radio Nottingham<br/>
        </div>
        <div>
            <strong>URN Internal Site</strong><br/>
            Web Design &amp; Development by <a href="https://hacksoc.net">HackSoc</a>
        </div>
    
      </AppBar>
      );
    }
}

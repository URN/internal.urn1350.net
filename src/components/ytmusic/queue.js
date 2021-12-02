import React from 'react';

import Typography from '@material-ui/core/Typography';

import Axios from 'axios';
import Settings from '../../settings.json';
import { QCard } from './cards';
  
export default class Queue extends React.Component {
    constructor(props) {
      super(props);
      this.state = {queue: []};
    }
  
    componentDidMount() {
  
      const getQueue = () => {
        Axios.get(`${Settings.process.env.YTMUSIC}/downloader`).then((data) => {
          this.setState({queue: data.data});
        });
      };
  
      // Fire once, immediately
      getQueue();
  
      // Fire every 'n' milliseconds (5 seconds shown here, 1 hour is 3600000 ms)
      this._interval = window.setInterval(getQueue, 5000);
    }
  
    componentWillUnmount() {
      this._interval && window.clearInterval(this._interval);
    }
  
    render() {
  
      return (
        <>
        <Typography gutterBottom variant="h2" component="div" key="title" className="h">Current Queue</Typography>
        <div>
          {this.state.queue.map((item) => (<QCard data={item} />))}
        </div>
        </>
      )
    }
  }
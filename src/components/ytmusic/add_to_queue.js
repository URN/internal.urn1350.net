import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import {MusicNote} from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';

import Settings from '../../settings.json';
import Axios from 'axios';
import { AtqCard } from './cards';
  
  export default class AddToQueue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            queue: [],
            loading: false,
            search: '',
        }

        this.update = this.update.bind(this);
        this.send_message = this.send_message.bind(this);
        this.add_to_queue = this.add_to_queue.bind(this);
      }

      update = async event => {
        this.setState({
          ...this.state,
          search: event.target.value
        })}

        send_message = async e => {
          e.preventDefault();
          // pass form data
          // get it from state
          let that = this;
      
          this.setState({
            ...this.state,
            loading: true,
          })


          let x = await Axios.get(`${Settings.process.env.YTMUSIC}/search/${this.state.search}`);
            that.setState({
                ...that.state,
                queue: x.data,
                loading: false
            })

        }

    async add_to_queue(id, e){
      const that = this;

        
        that.setState({
          ...that.state,
          loading: false,
          queue: [],
        })

        let x = await Axios.post(`${Settings.process.env.YTMUSIC}/downloader`, id);
      
    }

    render() {
      const x =  (
      <>
      <Typography gutterBottom variant="h2" component="div" key="title" className="h">Add to Queue</Typography>
      <div className="outer">
      <div className="form-centre">
        <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Song Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <MusicNote />
            </InputAdornment>
          }
          value={this.state.search}
          onChange={this.update}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={this.send_message}>Submit</Button>
      </div>
      </div>
      </>
      );

      if (this.state.loading) {
        return (<>
        {x}
        <div className="outer">
        <CircularProgress color="primary" />
          </div>
</>)
      
      } else {
        return (<>
        {x}
          {this.state.queue.map(q => (<AtqCard onClick={this.add_to_queue} data={q}/>) )}
        </>);
      }
    }
}
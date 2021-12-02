import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Settings from '../../settings.json';
import { Button, Link } from '@material-ui/core';

function DateString(date) {
  let d = new Date(date);
  return d.toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}


export function AtqCard({data, onClick}) {

  return (
  <Card className="atq-card" elevation={3}>
          <CardMedia
            component="img"
            image={[...data.thumbnails].sort((a, b) => a.width < b.width)[0].url}
            alt={data.name}
            />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" key="title" className="h">
              {data.title} ({data.artists.map(a => a.name).join(', ')})
            </Typography>
            <p><b>Album</b> {data.album.name}</p>
            <p><a href={`https://youtu.be/${data.videoId}`} target="_blank"> View on YouTube</a></p>
            <Button variant="contained" color="primary" onClick={async e => onClick(data, e)}>Add to Queue</Button>
          </CardContent>
  </Card>);
}

export function QCard({data}){
  return (
    <Card className="atq-card" elevation={3}>
            <CardMedia
              component="img"
              image={[...data.thumbnails].sort((a, b) => a.width < b.width)[0].url}
              alt={data.name}
              />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" key="title" className="h">
                {data.title} ({data.artists.map(a => a.name).join(', ')})
              </Typography>
              <p><b>Album</b> {data.album.name}</p>
              <p><a href={`https://youtu.be/${data.videoId}`} target="_blank"> View on YouTube</a></p>
            </CardContent>
    </Card>);
}
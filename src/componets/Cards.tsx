import React from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards() {
  return <div className="card">
  <Card sx={{ maxWidth: '300px' }}>
    <CardMedia
      component="img"
      alt="Contemporary"
      height="140"
      image="https://source.unsplash.com/random"
      title="Contemporary"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Card title
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        This is a media card. You can use this section to describe the content.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
  </div>
}

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {state}
        </Typography>
        <Typography variant="body2">
          {id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onArchiveTask(id)}>Archive</Button>
        <Button size="small" onClick={() => onPinTask(id)}>Pin</Button>
      </CardActions>
    </Card>
  );
}
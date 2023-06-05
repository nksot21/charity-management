import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function InfoCard(props) {
  const receiver = props.data
    return (
      <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia style={{objectFit: "contain"}}
          component="img"
          height="200"
          image={receiver.photo}
          alt="receiver img"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {receiver.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {receiver.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

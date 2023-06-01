import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function InfoCard() {
    return (
      <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia style={{objectFit: "contain"}}
          component="img"
          height="200"
          image="https://firebasestorage.googleapis.com/v0/b/charity-management-1e00b.appspot.com/o/HOA-HAU-THUY-TIEN-1.jpg?alt=media&token=3f242bc2-af11-4230-9bd2-66c8b43fe1aa"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Hộ gia đình Ngô Thị Thu Hà
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Mưa lớn và lũ thượng nguồn đổ về, nước sông Hoài dâng cao, ngập tràn vào các khu vực phố cổ Hội An, tỉnh Quảng Nam . Một số tuyến đường Nguyễn Thái Học, Bạch Đằng bị ngập sâu hơn 1 mét.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

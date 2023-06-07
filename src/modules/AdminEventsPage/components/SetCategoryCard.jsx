import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

export default function SetCategoryCard(props) {
    console.log(props)
    return (
      <Card sx={{ maxWidth: 300, padding:"0", marginBottom: "15px"}}>
      <CardActionArea>
        <CardContent>
            {props.data?.name}
            <Container>
                {
                    props.data?.products.map((item) => 
                        <Row>
                            <Col>
                                <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                                    Sản phẩm: 
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                                    {item.category + "-" + item.amount}
                                </Typography>
                            </Col>
                        </Row>
                    )
                }
            </Container>
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

export default function ProductContentCard(props) {
    const category = props.data
    return (
      <Card sx={{ maxWidth: 600, padding:"0" }}>
      <CardActionArea>
        <CardContent>
            <Container>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Mã sản phẩm: 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                           {"CAT" + category.id}
                        </Typography>
                    </Col>
                    <Col>
                    <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Tên sản phẩm: 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            {category.name}
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Hiện có: 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            {(category.totalAmount || "0") + " " + category.unit} 
                        </Typography>
                    </Col>
                    <Col>
                    <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Đơn vị:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            {category.unit}
                        </Typography>
                    </Col>
                </Row>
            
            </Container>
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

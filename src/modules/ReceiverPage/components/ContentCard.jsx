import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

export default function ContentCard() {
    return (
      <Card sx={{ maxWidth: 700, padding:"0 20px 0 20px" }}>
      <CardActionArea>
        <CardContent>
            <Container>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Tên đơn vị:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            Ngô Thị Thu Hà
                        </Typography>
                    </Col>
                    <Col>
                    <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Số liên hệ: 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            091335724
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Ngày sinh:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            30/04/1994
                        </Typography>
                    </Col>
                    <Col>
                    <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            CCCD:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            DOC20186673424
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Địa chỉ:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            1346 Bình Hưng, xã Địa Hòa, tỉnh Lâm Đồng, Việt Nam
                        </Typography>
                    </Col>
                
                </Row>
                <Row> 
                    <Col>
                        <Typography gutterBottom variant="body1" component="div" className='d-inline'  style={{height: '50px', lineHeight: '50px'}}>
                            Loại đơn vị:  
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px",  height: '50px', lineHeight: '50px'}}>
                            Cá nhân
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" component="div" className='d-inline'  style={{height: '50px', lineHeight: '50px'}}>
                            Số tài khoản:  
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px",  height: '50px', lineHeight: '50px'}}>
                            557335367432
                        </Typography>
                    </Col>
                    <Col>
                        <Typography gutterBottom variant="body1" component="div" className='d-inline'  style={{height: '50px', lineHeight: '50px'}}>
                            Ngân hàng: 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px",  height: '50px', lineHeight: '50px'}}>
                            VietCombank
                        </Typography>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Typography gutterBottom variant="body1" component="div" className='d-inline'  style={{height: '50px', lineHeight: '50px'}}>
                           Hoạt động đang tham gia
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px",  height: '50px', lineHeight: '50px'}}>
                            Vì tình thương miền Trung 2023
                        </Typography>
                    </Col>
                </Row>
            </Container>
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

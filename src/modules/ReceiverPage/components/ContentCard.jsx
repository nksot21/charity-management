import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

export default function ContentCard(props) {
    const receiver = props.data
    const distribution = props.distribution
    console.log('distribution')
    console.log(distribution)
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
                            {receiver.name}
                        </Typography>
                    </Col>
                    <Col>
                    <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Số liên hệ: 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            {receiver.phone}
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Ngày sinh:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            {receiver.birthday}
                        </Typography>
                    </Col>
                    <Col>
                    <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            CCCD:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            {receiver.docId}
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
                            Địa chỉ:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
                            {receiver.address + ", " + receiver.district + ", " + receiver.cityprovince + ", " + receiver.country}
                        </Typography>
                    </Col>
                
                </Row>
                <Row> 
                    <Col>
                        <Typography gutterBottom variant="body1" component="div" className='d-inline'  style={{height: '50px', lineHeight: '50px'}}>
                            Loại đơn vị:  
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px",  height: '50px', lineHeight: '50px'}}>
                            {receiver.receiverType?.name}
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="body1" component="div" className='d-inline'  style={{height: '50px', lineHeight: '50px'}}>
                            Số tài khoản:  
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px",  height: '50px', lineHeight: '50px'}}>
                            {receiver.bankNumber}
                        </Typography>
                    </Col>
                    <Col>
                        <Typography gutterBottom variant="body1" component="div" className='d-inline'  style={{height: '50px', lineHeight: '50px'}}>
                            Ngân hàng: 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px",  height: '50px', lineHeight: '50px'}}>
                            {receiver.bankName}
                        </Typography>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Typography gutterBottom variant="body1" component="div" className='d-inline'  style={{height: '50px', lineHeight: '50px'}}>
                           Hoạt động đang tham gia
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px",  height: '50px', lineHeight: '50px'}}>
                            {distribution?.event?.title || "Không có hoạt động nào đang tham gia"}
                        </Typography>
                    </Col>
                </Row>
            </Container>
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

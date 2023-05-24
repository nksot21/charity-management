import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import LogoImg from '../../../assets/images/global/logo.png'
import './Banner.css'

export default function Banner() {
  return (
    <div className='d-flex' style={{position: 'absolute', top:'120px', left:'140px'}}>
        <Container>
            <Row style={{ width: '1300px'}}>
                <Col className='col-4'>
                    <img src={LogoImg} className='mx-auto d-block' style={{height:'400px', objectFit: 'contain'}}/>
                </Col>
                <Col className='col-8' style={{paddingTop: '70px', paddingBottom: '70px', paddingLeft: "150px"}}>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className='banner-heading'> ASHEEP CHARITY ORGANIZATION</h1>
                                <p className='banner-text'>aSheep đồng hành cùng cộng đồng từ thiện minh bạch </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-6 d-flex mt-3'>
                                <a href='/trang-chu'><Button className='banner-button ' variant="success" size="lg" >Tham gia ngay</Button></a>
                                <Button className='banner-button mx-auto' variant="secondary" size="lg">
                                Liên hệ
                            </Button>
                            </Col>
                            <Col className='col-6'>
                            
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

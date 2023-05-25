import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import UserImg from '../../../assets/images/landingpage/jennie.png'
import './DonorCard.css'

export default function DonorCard(props) {
    console.log('props')
    console.log(props)
  return (
    <Container style={{height: '255px', width: '335px', backgroundColor: '#FCFCFD',  padding: '28px', borderRadius: '12px', border: 'solid 3px #F1F1F3'}}>
        <Row >
            <Col className='col-4'>
                <img style={{width: '60px', height: '60px', objectFit: 'cover', border: '2px solid #075233', borderRadius: '30px'}} src={UserImg} />
            </Col>
            <Col className='col-8 d-flex' style={{flexDirection: 'column'}}>
                <p className='card-heading-1'>{props?.name}</p>
                <p className='card-heading-2' style={{ marginBottom: '28px'}}>{props?.email}</p>
            </Col>
            <div className='card-line'/>
        </Row>
        <Row>
            <Col>
                <p className='card-heading-2'  style={{ marginBottom: '5px'}}>Tài khoản từ thiện số: <span>{props?.id}</span></p>
                <p className='card-heading-2' style={{ marginBottom: '18px'}}>Tham gia từ: {props?.date}</p>
                <a  className='card-heading-2'href="#"> Xem sao kê</a>
            </Col>
        </Row>
    </Container>
  )
}

import React from 'react'
import { Container , Col, Row} from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../../../globalComponents/Header/Header'
import Sidebar from '../../../globalComponents/Sidebar/Sidebar'

export default function Homepage() {
    return (
        <Container fluid style={{padding: '0px'}}>
          {/* <Header /> */}
          <Row className='d-flex' style={{height: '100%', padding: "0px", margin: "0px"}}>
            <Col xs={2} >
                <Sidebar/>
            </Col>
            <Col xs={10}>
                <Outlet />
            </Col>
          </Row>
        </Container>
    )
}

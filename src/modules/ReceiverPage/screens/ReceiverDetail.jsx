import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ContentCard from '../components/ContentCard'
import DataTable from '../components/DataTable'
import InfoCard from '../components/InfoCard'

export default function ReceiverDetail() {
const params = useParams()
  return (
    <div style={{padding: "0 0 0 50px"}}>
        <Stack direction="horizontal" gap={2} className="mt-3">
                    <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Trang chủ</Link>
                    <FontAwesomeIcon
                            icon={faChevronRight}
                            className="me-3"
                            style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                    <Link key="Home" to="/nguoi-nhan" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Người nhận</Link>
                    <FontAwesomeIcon
                            icon={faChevronRight}
                            className="me-3"
                            style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                    <Link key="receiver" to={`/nguoi-nhan/${params.id}`} className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>{params.id}</Link>
        </Stack>
        <Container >
          <Row>
            <Col className="col-10 mb-3">
                <h4 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Hộ gia đình Ngô Thị Thu Hà</b></h4>
            </Col>
          </Row>
          <Row>
            <Col className='col-4'>
                <InfoCard />
            </Col>
            <Col className='col-8'>
                <ContentCard />
            </Col>
          </Row>
          <Row style={{marginTop: "50px"}}>
            <h6 className="mb-3 mt-3" style={{color: "green"}}><b>Các hoạt động đã tham gia</b></h6>
          </Row>
          <Row>
            <DataTable data={rows}/>
          </Row>
        </Container>
    </div>
  )
}

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

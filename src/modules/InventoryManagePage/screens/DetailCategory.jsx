import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import ProductTable from '../components/ProductTable'

export default function DetailCategory() {
    const params = useParams()
  return (
    <div style={{padding: "0 0 0 50px", marginBottom: "50px"}}>
      <Stack direction="horizontal" gap={2} className="mt-3">
            <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Trang chủ</Link>
            <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
            <Link key="Home" to="/quan-ly/kho" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Quản lý kho</Link>
            <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
            <Link key="Home" to={`/quan-ly/kho/${params.id}`} className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>{params.id}</Link>
        </Stack>

        <Container>
            <Row>
                <Col>
                    <h4 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Quản lý kho - Thịt</b></h4>
                </Col>
            </Row>
            <Row>
                <h6 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Danh sách thu</b></h6>
            </Row>
            <Row>
                <ProductTable data={[]}/>
            </Row>
            <Row>
                <h6 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Danh sách chi</b></h6>
            </Row>
            <Row>
                <ProductTable data={[]}/>
            </Row>
        </Container>
    </div>
  )
}

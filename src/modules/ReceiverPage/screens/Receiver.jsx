import { faChevronRight, faPlusCircle } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReceiverService } from '../../../services';
import DataTable from '../components/DataTable';
import ReceiverTable from '../components/DataTable'

export default function Receiver() {
  const [receiverList, setReceiverList] = useState([]);
  const [isLoading, setLoading] = useState("true");

  useEffect(() => {
    retrieveReceivers();
    setLoading(false)
  }, []);
  const retrieveReceivers = () => {
      ReceiverService.getAllReceivers()
      .then(response => {
          console.log(response.data.data)
          const receivers = response.data.data
          let tempList = []
          receivers.map(rec => {
            let temp = {
              id: "REC" + rec.id,
              name: rec.name,
              phone: rec.phone,
              docId: rec.docId,
              type: rec.receiverType?.name,
              description: rec.description
            }
            tempList.push(temp)
          })
          
          setReceiverList(tempList);
      })
      .catch(e => {
          console.log('Error: ',e);
      });
  }

  if(!isLoading)
  return (
    <div style={{padding: "0 0 0 50px", marginBottom: "50px"}}>
      <Stack direction="horizontal" gap={2} className="mt-3">
            <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Trang chủ</Link>
            <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
            <Link key="Home" to="/nguoi-nhan" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Người nhận</Link>
        </Stack>

        <Container >
          <Row>
            <Col className="col-10 mb-3">
                <h4 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Quản lý danh sách người nhận  <span style={{fontSize: '18px', fontWeight: 'normal'}}>tổng số: {receiverList.length}</span></b></h4>
            </Col>
            <Col className="col-2">
              <Link to='them' className='bg-primary text-light py-2 px-3 rounded-2 text-decoration-none' style={{alignItems: "center"}}>
                  <FontAwesomeIcon icon={faPlusCircle}/>
                  <span className='ps-2' style={{fontSize: "14px"}}>Thêm</span>
              </Link>
            </Col>
          </Row>
        </Container>
        <div>
          <DataTable data={receiverList}/>
          
        </div>
        
    </div>
  )
}

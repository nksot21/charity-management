import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ReceiverService } from '../../../services'
import ActivityTable from '../components/ActivityTable';
import ContentCard from '../components/ContentCard'
import DataTable from '../components/DataTable'
import InfoCard from '../components/InfoCard'

export default function ReceiverDetail() {
  const [receiver, setReceiver] = useState({});
  const [moneyReceived, setMoneyReceived] = useState(0);
  const [isLoading, setLoading] = useState("true");
  const [distributionList, setDistributionList] = useState([])
  const [currentDistribution, setCurrentDistribution] = useState({})
  const params = useParams()

  console.log('params')
  console.log(params.id.slice(3))
  useEffect(() => {
    retrieveReceivers();
    retrieveDistributions();
    setLoading(false)
  }, []);
  const retrieveReceivers = () => {
      ReceiverService.getReceiverById(params.id.slice(3))
      .then(response => {
          console.log(response.data.data)
          const receivers = response.data.data
          setReceiver(receivers);
      })
      .catch(e => {
          console.log('Error: ',e);
      });
  }

  const retrieveDistributions= () => {
    ReceiverService.getAllDistribution(params.id.slice(3))
    .then(response => {
        console.log(response.data.data)
        const distributions = response.data.data
        let tempList = []
        let moneyReceived = 0
        distributions.map(dis => {
          if(dis.status != "completed"){
            setCurrentDistribution(dis)
          }
          let expectValue = ""
          let actualValue = ""
          if(dis.transfer){
              moneyReceived += parseInt(dis.transfer.amount)
              expectValue = (dis.transfer.amount || "0") + " VND"
              actualValue = (dis.transfer.amount || "0") + " VND"
          }else{
            expectValue = (dis.item?.plannedQuantity || "0" ) + " " + dis.item?.category.unit + " (" + dis.item?.category.name + ")"
            actualValue = (dis.item?.actualQuantity || "0" ) +  " " +dis.item?.category.unit + " (" + dis.item?.category.name + ")"
          }
          let temp = {
            id: dis.id,
            name: {id: "EVE" +dis.event.id, name: dis.event.title},
            startTime: dis.event.dateBegin,
            endTime: dis.event.dateEnd,
            expect:expectValue ,
            receiver: actualValue,
            status: dis.status
          }
          tempList.push(temp)
        })
        setMoneyReceived(moneyReceived)
        setDistributionList(tempList)
        console.log('tempList')
        console.log(tempList)
    })
    .catch(e => {
        console.log('Error: ',e);
    });
  }


  if(!isLoading)
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
                <h4 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>{receiver.name}</b></h4>
            </Col>
            <Col className="col-2">
              <Link to='sua' className='bg-primary text-light py-2 px-3 rounded-2 text-decoration-none' style={{alignItems: "center"}}>
                  <FontAwesomeIcon icon={faPen}/>
                  <span className='ps-2' style={{fontSize: "14px"}}>Sửa</span>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className='col-4'>
                <InfoCard data={receiver}/>
            </Col>
            <Col className='col-8'>
                <ContentCard  data={receiver} distribution={currentDistribution}/>
            </Col>
          </Row>
          <Row style={{marginTop: "50px"}}>
            <h6 style={{color: "green"}}><b>Các hoạt động đã tham gia</b></h6>
          </Row>
          <Row>
            <p className="mb-3"style={{color: "green"}}>Tổng số tiền đã nhận: {moneyReceived } VNĐ</p>
          </Row>
          <Row style={{marginBottom: "50px"}}>
            <ActivityTable data={distributionList}/>
          </Row>
        </Container>
    </div>
  )
}



import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, FormControl, Row, Stack } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { CategoryService } from '../../../services'
import AppCircleChart from '../components/CircleChart'
import ProductContentCard from '../components/ProductContentCard'
import DistributionItemToTable from '../components/DistributionItemToTable'
import DonationItemTable from '../components/DonationItemTable'
import LineChart from '../components/LineChart'

export default function DetailCategory() {
    const [categoryDB, setCategoryDB] = useState({})
    const [distributionList, setDistributionList] = useState({})
    const [distributionShow, setDistributionShow] = useState({})
    const [donationList, setDonationList] = useState({})
    const [donationShow, setDonationShow] = useState({})
    const [isLoading, setLoading] = useState({})
    const [searchValueTo, setSearchValueTo] = useState("");
    const [searchValueFr, setSearchValueFr] = useState("");
    
    const params = useParams()
    useEffect(() => {
        retrieveCategory();
        retrieveDistributionList();
        retrieveDonationList();
        setLoading(false)
    }, []);
    const retrieveCategory = () => {
    CategoryService.getCategoryById(params.id.slice(3))
            .then(response => {
            console.log(response.data.data)
            const category = response.data.data
            setCategoryDB(category)
        })
        .catch(e => {
            console.log('Error: ',e);
        });
    }

    const retrieveDistributionList = () => {
        CategoryService.getDistributionByCategory(params.id.slice(3))
        .then(res => {
            console.log(res.data.data)
            const distributionList = res.data.data 
            let tempList = []
            distributionList.map(item => {
                let temp = {
                    id: "DIS" + item.id,
                    name: "EVE" + item.event.id + "-" + item.event.title,
                    receivername: "REC" + item.receiver.id + "-" + item.receiver.name,
                    plannedAmount: (item.item.plannedQuantity || "0" ) + " " + item.item.category.unit,
                    actualAmount: (item.item.actualQuantity || "0" ) + " " + item.item.category.unit,
                    status: item.status
                }
                tempList.push(temp)
            })
            setDistributionShow(tempList)
            setDistributionList(distributionList)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const retrieveDonationList = () => {
        CategoryService.getDonationByCategory(params.id.slice(3))
        .then(res => {
            console.log(res.data.data)
            const donationList = res.data.data 
            let tempList = []
            donationList.map(item => {
                let temp = {
                    id: "DON" + item.id,
                    name: "EVE" + item.event.id + "-" + item.event.title,
                    donor: "REC" + item.donor.id + "-" + item.donor.name,
                    amount: (item.item.amount || "0" ) + " " + item.item.category.unit,
                    time: item.item.time 
                }
                tempList.push(temp)
            })
            setDonationShow(tempList)
            setDonationList(donationList)
        })
        .catch(e => {
            console.log(e)
        })
    }

    // Handle Search
    const handleSearchChangeTo = (event) => {
        const value = event.target.value;
        setSearchValueTo(value);
        searchTo(value)
        // find(value, ['StudentName', 'StudentID']); 
      };
    
      const searchTo = (value) => {
        let tempArr = [...distributionList].map((x) => x)
        console.log(value)
        let tempList = []
        tempArr.filter((item) => {
          if(item?.receiver.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || item?.event.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
            let temp = {
                id: "DIS" + item.id,
                name: "EVE" + item.event.id + "-" + item.event.title,
                receivername: "REC" + item.receiver.id + "-" + item.receiver.name,
                plannedAmount: (item.item.plannedQuantity || "0" ) + " " + item.item.category.unit,
                actualAmount: (item.item.actualQuantity || "0" ) + " " + item.item.category.unit,
                status: item.status
            }
            tempList.push(temp)
          }
           
        })
        console.log(tempList)
        
        setDistributionShow(tempList)
      }


      const handleSearchChangeFr = (event) => {
        const value = event.target.value;
        setSearchValueFr(value);
        searchFr(value)
        // find(value, ['StudentName', 'StudentID']); 
      };
    
      const searchFr = (value) => {
        let tempArr = [...donationList].map((x) => x)
        console.log("donationList")
        console.log(donationList)
        let tempList = []
        tempArr.filter((item) => {
            console.log(item?.donor.name)
            console.log(item?.event.title)
          if(item?.donor.name?.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || item?.event?.title?.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
            let temp = {
                id: "DON" + item.id,
                    name: "EVE" + item.event.id + "-" + item.event.title,
                    donor: "REC" + item.donor.id + "-" + item.donor.name,
                    amount: (item.item.amount || "0" ) + " " + item.item.category.unit,
                    time: item.item.time 
            }
            tempList.push(temp)
          }
           
        })
        console.log(tempList)
        
        setDonationShow(tempList)
      }

    if(!isLoading)
  return (
    <div style={{padding: "0 0 0 25px", marginBottom: "50px"}}>
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
                    <h4 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Quản lý kho - {categoryDB.name}</b></h4>
                </Col>
            </Row>
            <Row>
                <Col className="col-7">
                    <LineChart id={params.id.slice(3)}/>
                </Col>
                <Col className="col-5">
                    <ProductContentCard data={categoryDB}/>
                </Col>
            </Row>
            <Row style={{marginTop: "30px"}}>
                <h5 className="mb-3 mt-3" style={{color: "#075233"}}><b>Danh sách thu</b></h5>
            </Row>
            <Row>
                <FormControl type="text"  className="focusNone" style={{marginLeft: "13px", width: "500px"}}
                    placeholder='Tìm theo tên sự kiện, người quyên góp'
                     value={searchValueFr} 
                     onChange={handleSearchChangeFr}
                    >
                    
                    </FormControl>
            </Row>
            <Row style={{marginTop: "15px"}}>
                <DonationItemTable data={donationShow}/>
            </Row>
            <Row style={{marginTop: "30px"}}>
                <h5 className="mb-3 mt-3" style={{color: "#075233"}}><b>Danh sách chi</b></h5>
            </Row>
            <Row>
                <FormControl type="text"  style={{marginLeft: "13px", width: "500px"}}
                    placeholder='Tìm theo tên sự kiện, người nhận'
                    value={searchValueTo} 
                    onChange={handleSearchChangeTo}></FormControl>
            </Row>
            <Row style={{marginTop: "15px"}}>
                <DistributionItemToTable data={distributionShow}/>
            </Row>
        </Container>
    </div>
  )
}

import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Col, Container, FormControl, Row, Stack } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { CategoryService, DistributionService, EventService, ReceiverService } from '../../../services'
import AddDistributionProduct from '../components/AddDistributionProduct'
import AddDistribution from '../components/AddDistributionReceiver'
import ReceiverTable from '../components/ReceiverTable'
import SetCategoryCard from '../components/SetCategoryCard'

export default function CreateDistributionPage() {
    const [open, setOpen] = useState(null);
    const [event, setEvent] = useState(null);
    const [productList, setProductList] = useState([])
    const [receiverList, setReceiverList] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [receiverShow, setReceiverShow] = useState([]);
    const [error, setError] = React.useState(null);
    const [isLoading, setLoading] = useState(true)
    const [addProductDiv, setProductDiv] = useState([]);
    const [setCategoryList, setSetCategoryList] = useState([])
    const [distributionData, setDistributionData] = useState([])
    const [categoryCardDiv, setCategoryCardDiv] = useState([])
    const [selectOption, setSelectOption] = useState([])
    const [selectedRow, setSelectedRow] = useState([])
    useEffect(() => {
        EventService.getEvent(params.id)
          .then((fetchedEvent) => {
            console.log(fetchedEvent.data)
            setError(null);
            setEvent(fetchedEvent.data);


          })
          .catch((e) => {
            setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
          });
          retrieveReceivers()
          retrieveCategoryList()
          setLoading(false)
      }, []);
    const params = useParams()
    
    const retrieveCategoryList = () => {
        CategoryService.getAll()
        .then(res => {
            console.log(res.data)
            setProductList(res.data)
        })
    }

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
            setReceiverShow(tempList)
            setReceiverList(tempList);
        })
        .catch(e => {
            console.log('Error: ',e);
        });
    }

    //Handle search
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        search(value)
        console.log(value)
      };
      const search = (value) => {
        let tempArr = [...receiverList].map((x) => x)
        let tempList = []
        tempArr.filter((item) => {
            if(item?.name?.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || item?.id.toString().includes(value)){
                let temp = {
                    id: item.id,
                    name: item.name,
                    phone: item.phone,
                    docId: item.docId,
                    type: item.receiverType?.name,
                    description: item.description
                  }
                  tempList.push(temp)
            }
        })
        setReceiverShow(tempList)
      }

    // Handle modal
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setProductDiv([])
        handleCount(0)
        setOpen(false)
    }
    const handleAddProductrDiv = (e) => {
        handleCount(1);
        setProductDiv(addProductDiv.concat(<AddDistributionProduct categoryList={productList} id={getCountValue()}/>))
    }
    

    const [count, setCount] = useState(1)

    const handleCount = (value) => {
        if(value !== 0)
            setCount(count + 1)
        else
            setCount(0)
    }

    const getCountValue = () => {
        let countValue = count;
        return countValue
    }

    const handleCreateSet = (e) => {
        let tempList = []
        console.log(count)
        for(let i = 0; i<count; i++){
            console.log(i)
            let temp = {
                category: document.getElementById("selectValue" + i).innerHTML,
                amount: document.getElementById("amount" + i).value
            }
            tempList.push(temp)
        }
        let setName = "SET" + setCategoryList.length
        let temp = {
            name: setName,
            products: tempList
        }
        setSetCategoryList(setCategoryList.concat(temp))
        setOpen(false)
    }

    useEffect(() => {
        console.log('SetCategoryList')
        console.log(setCategoryList)

        setCategoryCardDiv(categoryCardDiv.concat(<SetCategoryCard data={setCategoryList[setCategoryList.length - 1]}/>))
    }, [setCategoryList])

    useEffect(() => {
        let tempList = []
        productList.map(item => {
            tempList.push(`${item.id}.${item.name} (${item.unit})`)
        })
        setCategoryList.map(item => {
            tempList.push(`S.${item.name}`)
        })
        setSelectOption(tempList)
    }, [setCategoryList, productList])

    useEffect(() => {
        console.log('distributionData')
        console.log(distributionData)

        
    }, [distributionData])
    const divideSet = (distributeBySet) => {
        let option = setCategoryList.map(item => {
            if(distributeBySet.option.split(".")[1] == item.name)
                return item
        })
        console.log('option')
        console.log(option)
        let tempList = option[0].products?.map(product => {
            console.log("product")
            console.log(product)
            return {
                plannedQuantity: product.amount,
                categoryId: product.category.split(".")[0],
                receiverId: distributeBySet.id.slice(3)
            }
        })
        return tempList
    }
    const handleCreateDistribution = () => {
        console.log("distribution handle")
        console.log(selectedRow)
        let request = {
            status: 'Sắp diễn ra',
            event_id: params.id,
            itemList: []
        }
        selectedRow.map(row => {
            if(row.option.toString().split('.')[0] === 'S'){
                let tempList = divideSet(row)
                console.log('tempList')
                console.log(tempList)
                for(let i = 0; i<row.amount; i++){
                    console.log("concat")
                    request.itemList.push(...tempList)
                }
                    
            }else{
                console.log("indi product")
                console.log(row.option + " " + row.amount)
                let temp ={
                    plannedQuantity: row.amount,
                    categoryId: row.option.split(".")[0],
                    receiverId: row.id.slice(3)
                }
                request.itemList.push(temp)
            }
        })
        console.log("request")
        console.log(request)
        DistributionService.createDistribution(request)
        .then(res => {
            console.log(res)
        })
        .catch(e =>{
            console.log(e)
        })
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
            <Link key="Home" to="/admin/events" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Quản lý sự kiện</Link>
            <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
            <Link key="Home" to={`/admin/events/${params.id}`} className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>{event?.title}</Link>
            <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
            <Link key="Home" to={`/admin/events/${params.id}/them`} className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Tạo phân phối</Link>
        </Stack>
        
        <h4 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Tạo phân phối cho hoạt động <span style={{color: "green"}}>{event?.title}</span></b></h4>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {categoryCardDiv}
                </div> 


        {/* <SearchBar / */}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <FormControl type="text" className="focusNone"  style={{marginBottom: "15px"}}
                placeholder='Tìm'
                value={searchValue} 
                onChange={handleSearchChange}></FormControl>
            <Button variant='text' style={{marginRight: "50px"}} 
            onClick={handleOpen}   > Tạo phần quà</Button>
            </div>
        
        <ReceiverTable data={receiverShow} selectOption={selectOption} selectedRow={selectedRow} setSelectedRow={setSelectedRow}/>
        <div style={{display: "flex", justifyContent: "end", margin: "20px 50px 20px 0"}}>
            <Button
                // onClick={handleClose}
                variant='outlined'
                style={{fontSize: "14px", paddingInline: "16px", width: "100px", marginRight: "20px"}}
                    >
                Hủy
                
            </Button>
            <Button
            variant='contained'
                onClick={handleCreateDistribution}
                style={{fontSize: "14px", paddingInline: "16px", width: "100px"}}
                >
                Lưu
                
            </Button>
        </div>

        <Modal
        style={{overflow: "scroll"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box className="add-inventory-modal" style={{padding: "0 25px 0 25px", width: "600px"}}>
                <Container>
                    <Row style={{borderBottom: '2px solid #f1f1f3'}} className='my-2'>
                        <Col>
                            <h6 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Tạo set sản phẩm</b></h6>
                            {/* {addAlert && <p style={{color: 'red'}}>Sản phẩm đã tồn tại</p>} */}
                        </Col>
                    </Row>
                    <Row>
                        <Col id="dataField">
                            <AddDistributionProduct id="0" categoryList={productList} />
                            {addProductDiv}
                        </Col>
                    </Row>
                    <Row style={{marginTop: "15px"}}>
                        <Col className='col-8'  style={{ padding: '0'}}>
                        </Col>
                        <Col className='col-4'  style={{ padding: '0', cursor: 'pointer', color: "blue"}} onClick={handleAddProductrDiv}>
                            Thêm sản phẩm
                        </Col>
                    </Row>
                <Row style={{borderTop: '2px solid #f1f1f3', marginTop: '5px', marginBottom: "15px"}} >
                    <Col style={{display:"flex", justifyContent: "end", marginTop: "15px"}}>
                        <Button
                                onClick={handleClose}
                                style={{fontSize: "14px", paddingInline: "16px", width: "100px", marginRight: "20px"}}
                                 >
                                Hủy
                                
                            </Button>
                            <Button
                                onClick={handleCreateSet}
                                style={{fontSize: "14px", paddingInline: "16px", width: "100px"}}
                                >
                                Thêm
                                
                            </Button>
                    </Col>
                    </Row>
                </Container>
            </Box>
        </Modal>
    </div>
  )
}

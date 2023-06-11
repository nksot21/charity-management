import { faChevronRight, faPlusCircle } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert, Modal, Snackbar, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { React, useState, useEffect, useRef}from 'react'
import { Container, Col, Row, Stack, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CategoryService } from '../../../services'
import "../components/style.css"
import ProductTable from '../components/ProductTable'
import AppCircleChart from '../components/CircleChart'
import TotalLineChart from '../components/TotalLineChart'

export default function InventoryPage() {
    const [categoryListDB, setCategoryListDB] = useState([]);
    const [addAlert, setAddAlert] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [totalAmount, setTotalAmount] = useState(0)

    const handleOpen = () => {
        setOpen(true);}
    const handleClose = () => {
        setAddAlert(false);
        setOpen(false);
    }

    // Get category list
    useEffect(() => {
        retrieveCategoryList();
        setLoading(false)
    }, []);
    const retrieveCategoryList = () => {
    CategoryService.getAll()
        .then(response => {
            console.log(response.data)
            const categoryList = response.data
            setCategoryListDB(categoryList)
            let tempList = []
            let total = 0
            categoryList.map(cat => {
                if(cat.name != "Tiền" || cat.id != 3) total += parseInt(cat.totalAmount)
                let temp = {
                    id: "CAT" + cat.id,
                    name: cat.name,
                    unit: cat.unit,
                    amount: cat.totalAmount,
                    score: cat.scoreExchange
                }
                tempList.push(temp)
            })
            setCategoryList(tempList);
            setTotalAmount(total)
        })
        .catch(e => {
            console.log('Error: ',e);
        });
    }


    // Handle add category
    const [successMessOpen, setSuccessMessOpen] = useState(false);
    const [failedMessOpen, setFailedMessOpen] = useState(false);
    const [failedMess, setFailedMess] = useState("Thêm thất bại! Vui lòng thử lại");
    const name = useRef("")
    const unit = useRef("")
    const description = useRef("")

  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessMessOpen(false);
  };

  const handleFailedClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setFailedMessOpen(false);
  };
  const saveHandler = () => {
    const data = {
        name: name.current.value,
        unit: unit.current.value
    }
    // kiem tra name
    let result = categoryList.some(cate => cate.name === data.name && cate.unit === data.unit)
    if(!result){
        setAddAlert(false);
        CategoryService.create(data)
        .then(res => {
            console.log(res)
            setSuccessMessOpen(true)
            handleClose()
            retrieveCategoryList()
        })
        .catch(err => {
            console.log(err.response)
            setFailedMess(err.response)
            setFailedMessOpen(true)
        })
    }else{
        setAddAlert(true);
    }
    
  }
  
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    search(value)
    // find(value, ['StudentName', 'StudentID']); 
  };

  const search = (value) => {
    let tempArr = [...categoryListDB].map((x) => x)
    let tempList = []
    tempArr.filter((cat) => {
      if(cat?.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || cat?.id.toString().includes(value)){
        let temp = {
            id: "CAT" + cat.id,
            name: cat.name,
            unit: cat.unit,
            amount: cat.totalAmount,
            score: cat.scoreExchange
        }
        tempList.push(temp)
      }
    })
    setCategoryList(tempList)
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
            <Link key="Home" to="/quan-ly/kho" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Quản lý kho</Link>
        </Stack>
        <Container>
            <Row>
                <Col>
                    <h4 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Quản lý kho</b></h4>
                </Col>
                  <Col className="col-2">
                      
                    <Button onClick={handleOpen} className='bg-primary text-light py-2 px-3 rounded-2 text-decoration-none' style={{alignItems: "center"}}>
                        <FontAwesomeIcon icon={faPlusCircle}/>
                        <span className='ps-2' style={{fontSize: "14px"}}>Thêm</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className='col-4 mb-3'>
                    <h6 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Tỉ lệ tồn kho</b></h6>
                    <AppCircleChart totalAmount={totalAmount} categoryList={categoryListDB}/>
                </Col>
                <Col className='col-8 mb-3'>
                    <h6 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Tồn kho theo ngày</b></h6>
                    <TotalLineChart categoryList={categoryListDB} />
                </Col>
            </Row>
            <Row style={{marginBottom: "30px"}}>
                {/* <SearchBar / */}
                <Col className="searchStyle">
                    <FormControl type="text"  className="focusNone"
                        placeholder='Tìm'
                        value={searchValue} 
                        onChange={handleSearchChange}></FormControl>
                </Col>
            </Row>
            <Row>
                <ProductTable data={categoryList} />
            </Row>
        </Container>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box className="add-inventory-modal" style={{padding: "0 25px 0 25px"}}>
                <Container>
                    <Row style={{borderBottom: '2px solid #f1f1f3'}} className='my-2'>
                        <Col>
                            <h6 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Thêm loại hàng hóa quyên góp</b></h6>
                            {addAlert && <p style={{color: 'red'}}>Sản phẩm đã tồn tại</p>}
                        </Col>
                    </Row>
                <Row style={{marginTop: '30px'}}>
                    <Col className='col-6'>
                        <TextField id="outlined-basic" label="Tên loại" variant="outlined" size="small" inputRef={name}/>
                    </Col>
                    <Col className='col-6'>
                        <TextField id="outlined-basic" label="Đơn vị" variant="outlined" size="small" inputRef={unit}/>
                    </Col>
                </Row>
                <Row style={{marginTop: '30px'}}>
                    <Col>
                        <FormControl style={{width: '495px'}} >
                            <TextField id="outlined-basic" label="Mô tả" variant="outlined" size="small" multiline rows={3} inputRef={description}/>
                        </FormControl>
                    </Col>
                </Row>
                <Row style={{borderTop: '2px solid #f1f1f3', marginTop: '30px', marginBottom: "15px"}} >
                    <Col style={{display:"flex", justifyContent: "end", marginTop: "15px"}}>
                        <Button
                                onClick={handleClose}
                                style={{fontSize: "14px", paddingInline: "16px", width: "100px", marginRight: "20px"}}
                                variant="secondary" >
                                Hủy
                                
                            </Button>
                            <Button
                                onClick={saveHandler}
                                style={{fontSize: "14px", paddingInline: "16px", width: "100px"}}
                                variant="success" >
                                Thêm
                                
                            </Button>
                    </Col>
                    </Row>
                </Container>
            </Box>
        </Modal>
        <Snackbar style={{position: "fixed", top: '920px', left: "1000px"}} open={successMessOpen} autoHideDuration={3000} onClose={handleSuccessClose}>
                    <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
                        Thêm thành công
                    </Alert>
                </Snackbar>
                <Snackbar style={{position: "fixed", top: '920px', left: "900px"}} open={failedMessOpen} autoHideDuration={3000} onClose={handleFailedClose}>
                    <Alert onClose={handleFailedClose} severity="error" sx={{ width: '100%' }}>
                        {failedMess}
                    </Alert>
        </Snackbar>
    </div>
  )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


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
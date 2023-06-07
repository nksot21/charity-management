
import {Modal, TextField } from '@mui/material';
import { Box } from '@mui/system'
import { React, useState, useEffect, useRef}from 'react'
import { Container, Col, Row, Stack, Button, FormControl } from 'react-bootstrap'
import AddDistribution from './AddDistributionReceiver';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function DistributionPopup(props) {
    // const [open, setOpen] = useState(false);
    const [addReceiverDiv, setReceiverDiv] = useState([]);
    console.log(props.openState)
    const handleOpen = () => {
        props.setOpenState(true);}
    const handleClose = () => {
        // setAddAlert(false);
        setReceiverDiv([])
        props.setOpenState(false);
    }

    const handleAddReceiverDiv = (e) => {
        setReceiverDiv(addReceiverDiv.concat(<AddDistribution />))
    }
    
  return (
    <div>
        <Modal
        style={{overflow: "scroll"}}
        open={props.openState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box className="add-inventory-modal" style={{padding: "0 25px 0 25px", width: "600px"}}>
                <Container>
                    <Row style={{borderBottom: '2px solid #f1f1f3'}} className='my-2'>
                        <Col>
                            <h6 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Phân phối sản phẩm ủng hộ</b></h6>
                            {/* {addAlert && <p style={{color: 'red'}}>Sản phẩm đã tồn tại</p>} */}
                        </Col>
                    </Row>
                    <Row style={{borderBottom: '2px solid #f1f1f3', marginTop: '15px', paddingBottom: "15px"}}>
                        <Col className='col-6'>
                            <TextField id="outlined-basic" label="Chọn nhóm người nhận " variant="outlined" size="small" />
                        </Col>
                    </Row>
                    <Row>
                        <Col id="dataField">
                            <AddDistribution id="dis1"/>
                            {addReceiverDiv}
                        </Col>
                    </Row>
                    <Row style={{marginTop: "15px"}}>
                        <Col className='col-8'  style={{ padding: '0'}}>
                        </Col>
                        <Col className='col-4'  style={{ padding: '0', cursor: 'pointer', color: "blue"}} onClick={handleAddReceiverDiv}>
                            Thêm người nhận
                        </Col>
                    </Row>
                <Row style={{borderTop: '2px solid #f1f1f3', marginTop: '5px', marginBottom: "15px"}} >
                    <Col style={{display:"flex", justifyContent: "end", marginTop: "15px"}}>
                        <Button
                                onClick={handleClose}
                                style={{fontSize: "14px", paddingInline: "16px", width: "100px", marginRight: "20px"}}
                                variant="secondary" >
                                Hủy
                                
                            </Button>
                            <Button
                                // onClick={saveHandler}
                                style={{fontSize: "14px", paddingInline: "16px", width: "100px"}}
                                variant="success" >
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

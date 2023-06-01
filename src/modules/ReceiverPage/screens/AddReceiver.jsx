import React, { useState, useEffect, useRef } from 'react';
import Stack from 'react-bootstrap/Stack';
import styled from "../components/style.module.css"
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { Col, Form, Row, Image, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import {ReceiverService} from "../../../services"
import {storage} from '../../../firebaseSetup'
// import { storage } from "../../../firebase";
import axios from "axios";
import { Alert, Snackbar } from '@mui/material';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"
export default function AddReceiver() {
    const fullname = useRef("");
    
    const address = useRef("");
    const district = useRef("");
    const city = useRef("");
    const country = useRef("");
    const phoneNumber = useRef("");
    const dob = useRef("");
    const docId = useRef("");
    const description = useRef("");
    const scoreDesire = useRef("");
    const receiverType = useRef("");
    const [successMessOpen, setSuccessMessOpen] = useState(false);
    const [failedMessOpen, setFailedMessOpen] = useState(false);
    const [failedMess, setFailedMess] = useState("Thêm thất bại! Vui lòng thử lại");
    const [imageUpload, setImageUpload] = useState(null);
    const [gender, setGender] = useState(null)
    const [show, setShow] = useState(false);
    const [classList, setClassList] = useState([]);
    const [choosenClass, setChoosenClass] = useState();
    const [recInfo, setRecInfo] = useState({});
    const [isLoading, setLoading] = useState("true");
    const [typeDb, setTypeDb] = useState([])
    var radios = document.getElementsByName('group');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const uploadImage = () => {
        const imageRef = ref(storage, `${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload)
          .then(() => {
            getDownloadURL(imageRef)
              .then((url) => {
                setUrl(url);
              })
              .catch((error) => {
                console.log(error.message, "error getting the image url");
              });
            setImage(null);
          })
          .catch((error) => {
            console.log(error.message);
          });
    };

    useEffect(() => {
        retrieveReceiverType();
        setLoading(false)
    }, []);
    const retrieveReceiverType = () => {
        ReceiverService.getAllReceiverType()
        .then(response => {
            console.log(response.data.data)
            setTypeDb(response.data.data);
        })
        .catch(e => {
            console.log('Error: ',e);
        });
    }

    const handleChangeGender = (event) => {
        setGender( event.target.value)
      };

    
    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };
    
    const saveHandler = async () => {
        uploadImage();
        while (url==null) {await sleep(1000);}
        console.log("url image")
        console.log(url)
        try {
            const recInfo = {
                name: fullname.current.value,
                gender: gender,
                receiver_type_id: receiverType.current.value,
                phone: phoneNumber.current.value,
                address: address.current.value,
                district: district.current.value,
                cityprovince: city.current.value,
                country: country.current.value,
                birthday: dob.current.value,
                docId: docId.current.value,
                description: description.current.value,
                photo: url,
            };
           
            // Check requiment
            if( !receiverType.current.value || !phoneNumber.current.value || !docId.current.value ){
                setFailedMess("Thông tin Tổ chức, Số liên hệ, Căn cước công dân còn thiếu!")
                setFailedMessOpen(true)
                return 
            }
            
            setRecInfo(recInfo)
            console.log('Receiver Info: ',recInfo);
            ReceiverService.createReceiver(recInfo)
            .then(response => {
                resetTextField()
                setSuccessMessOpen(true)
            }).catch(err => {
                console.log(err.response.data.message)
                setFailedMess(err.response.data.message)
                setFailedMessOpen(true)
            })
            
        } catch (e) {
            console.log('Error: ',e);
        }
    }

    const cancelHandler = (e) => {

        fullname.current.value= ''
        district.current.value= ''
        address.current.value= ''
        city.current.value= ''
        country.current.value= ''
        phoneNumber.current.value= ''
        dob.current.value= ''
        docId.current.value= ''
        description.current.value= ''
    }

    const handleClose = (event, reason) => {
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
            <Link key="Home" to="/nguoi-nhan/them" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Thêm</Link>
        </Stack>
        <h4 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Thêm người nhận mới</b></h4>

        <div className={`${styled['form']}`}>
                <Form className={`${styled['inside']}`}>
                    <Row>
                        <Col>
                            <Row className="mb-1"><lable style={{fontWeight:"500"}}>Ảnh</lable></Row>
                            <Row>
                                <div className={`${styled['avt']}`}>
                                    <Image src="https://i.imgur.com/1baFFao.png" roundedCircle="true" width="48px" height="48px"></Image>
                                    <Form.Group controlId="formFileSm">
                                        <Form.Control type="file" size="sm" style={{fontSize: "14px", color: "#6B7280"}} accept=".jpg, .png"
                                            onChange={(event) => setImageUpload(event.target.files[0])}/>
                                    </Form.Group>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className={`${styled['name-gender']}`}>
                            <Form.Group controlId="formGridName" style={{width: "600px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Họ và tên</Form.Label>
                                <Form.Control type="text" placeholder="Họ và tên" style={{fontSize: "14px", marginTop:"4px"}} ref={fullname}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "200px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Giới tính</Form.Label>
                                <br />
                                <Form.Check
                                    inline
                                    type="radio"
                                    id={"gender-0"}
                                    style={{fontSize: "14px", marginTop:"8px"}}
                                    label="Nam"
                                    name="gender"
                                    value={0}
                                    onChange={handleChangeGender}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    id={"gender-1"}
                                    style={{fontSize: "14px", marginTop:"8px", marginLeft: "25px"}}
                                    label="Nữ"
                                    name="gender"
                                    value={1}
                                    onChange={handleChangeGender}
                                />
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <div  className={`${styled['name-gender']}`}>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Tổ chức <span style={{color:'red'}}> *</span></Form.Label>
                                <Form.Select defaultValue="Type" placeholder="Type" style={{fontSize: "14px", marginTop:"4px"}} ref={receiverType} required>
                                            {
                                                typeDb.map(type => <option value={type.id}>{type.name}</option>)
                                            }
                                        </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                    <Form.Label style={{fontWeight:"500"}}>Số liên hệ <span style={{color:'red'}}> *</span></Form.Label>
                                    <Form.Control type="tel" placeholder="Số liên hệ" style={{fontSize: "14px", marginTop:"4px"}} ref={phoneNumber} />
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <div className={`${styled['name-gender']}`}>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Địa chỉ</Form.Label>
                                <Form.Control type="text" style={{fontSize: "14px", marginTop:"4px"}} ref={address}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Phường/Xã</Form.Label>
                                <Form.Control type="text" style={{fontSize: "14px", marginTop:"4px"}} ref={district}/>
                            </Form.Group>
                        </div>
                    </Row>

                    <Row>
                        <div className={`${styled['name-gender']}`}>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Tỉnh/Thành phố</Form.Label>
                                <Form.Control type="text" style={{fontSize: "14px", marginTop:"4px"}} ref={city}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Quốc gia</Form.Label>
                                <Form.Control type="text" style={{fontSize: "14px", marginTop:"4px"}} ref={country}/>
                            </Form.Group>
                        </div>
                    </Row>
                    
                    <Row>
                        <div className={`${styled['name-gender']}`}>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Ngày sinh</Form.Label>
                                <Form.Control type="date" style={{fontSize: "14px", marginTop:"4px"}} ref={dob}/>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Căn cước công dân <span style={{color:'red'}}> *</span></Form.Label>
                                <Form.Control type="text" style={{fontSize: "14px", marginTop:"4px"}} ref={docId} required/>
                            </Form.Group>
                        </div>
                    </Row>

                    <Row>
                        <div>
                            <Form.Group controlId="formGridName" style={{width: "600px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Thông tin chi tiết</Form.Label>
                                <Form.Control as="textarea" rows={3} style={{fontSize: "14px", marginTop:"4px"}} ref={description}/>
                            </Form.Group>
                        </div>
                    </Row>
                    
                </Form>
                <div className={`${styled['div_save']}`}>
                        <Button
                            onClick={cancelHandler}
                            style={{fontSize: "14px", fontWeight: "bold", paddingInline: "16px", width: "100px", marginRight: "20px"}}
                            variant="secondary" >
                            Hủy
                            
                        </Button>
                        <Button
                            onClick={saveHandler}
                            style={{fontSize: "14px", fontWeight: "bold", paddingInline: "16px", width: "100px"}}
                            variant="success" >
                            Thêm
                            
                        </Button>
                </div>
                <Snackbar style={{position: "fixed", top: '920px', left: "1000px"}} open={successMessOpen} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Thêm thành công
                    </Alert>
                </Snackbar>
                <Snackbar style={{position: "fixed", top: '920px', left: "900px"}} open={failedMessOpen} autoHideDuration={3000} onClose={handleFailedClose}>
                    <Alert onClose={handleFailedClose} severity="error" sx={{ width: '100%' }}>
                        {failedMess}
                    </Alert>
                </Snackbar>
            </div>
        </div>
  )
}

function resetTextField() {

}

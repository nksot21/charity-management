import React, { useState, useEffect, useRef } from 'react';
import Stack from 'react-bootstrap/Stack';
import styled from "../components/style.module.css"
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { Col, Form, Row, Image, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import {ReceiverService} from "../../../services"
// import { storage } from "../../../firebase";
import axios from "axios";
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
    const [imageUpload, setImageUpload] = useState(null);
    const [gender, setGender] = useState({
        'gender-0': false,
        'gender-1': false
      });
    const [show, setShow] = useState(false);
    const [classList, setClassList] = useState([]);
    const [choosenClass, setChoosenClass] = useState();
    const [recInfo, setRecInfo] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var radios = document.getElementsByName('group');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    // const uploadImage = () => {
    //     // const imageRef = ref(storage, `${imageUpload.name}`);
    //     uploadBytes(imageRef, imageUpload)
    //       .then(() => {
    //         getDownloadURL(imageRef)
    //           .then((url) => {
    //             setUrl(url);
    //           })
    //           .catch((error) => {
    //             console.log(error.message, "error getting the image url");
    //           });
    //         setImage(null);
    //       })
    //       .catch((error) => {
    //         console.log(error.message);
    //       });
    // };

    const handleChange = (event) => {
        setGender({
          ...gender,
          [event.target.id]: event.target
        });
      };

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };
    
    
    const saveHandler = async () => {
        try {
            const recInfo = {
                name: fullname.current.value,
                // gender: gender,
                receiver_type_id: receiverType.current.value,
                phone: phoneNumber.current.value,
                address: address.current.value,
                district: district.current.value,
                cityprovince: city.current.value,
                country: country.current.value,
                birthday: dob.current.value,
                docId: docId.current.value,
                description: description.current.value,
            };
            setRecInfo(recInfo)
            console.log('Receiver Info: ',recInfo);
            ReceiverService.createReceiver(recInfo)
        } catch (e) {
            console.log('Error: ',e);
        }
    }


  return (
    
    <div style={{padding: "0 0 0 15px"}}>

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
        <h3 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Thêm người nhận mới</b></h3>

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
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    id={"gender-1"}
                                    style={{fontSize: "14px", marginTop:"8px", marginLeft: "25px"}}
                                    label="Nữ"
                                    name="gender"
                                    value={1}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        <div  className={`${styled['name-gender']}`}>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                <Form.Label style={{fontWeight:"500"}}>Tổ chức</Form.Label>
                                <Form.Select defaultValue="Type" placeholder="Type" style={{fontSize: "14px", marginTop:"4px"}} ref={receiverType}>
                                            <option value="1">Cá nhân</option>
                                            <option value="2">Phường xã</option>
                                            <option value="3">Tỉnh thành phố</option>
                                            <option value="4">Khác</option>
                                        </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formGridName" style={{width: "425px"}}>
                                    <Form.Label style={{fontWeight:"500"}}>Số liên hệ</Form.Label>
                                    <Form.Control type="tel" placeholder="Phone number" style={{fontSize: "14px", marginTop:"4px"}} ref={phoneNumber}/>
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
                                <Form.Label style={{fontWeight:"500"}}>Căn cước công dân</Form.Label>
                                <Form.Control type="text" style={{fontSize: "14px", marginTop:"4px"}} ref={docId}/>
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
                            onClick={saveHandler}
                            style={{fontSize: "14px", fontWeight: "bold", paddingInline: "16px", width: "100px"}}
                            variant="success" >
                            Thêm
                            
                        </Button>
                </div>
            </div>
    </div>
  )
}

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default function AddDistributionProduct(props) {
    const [selectedCategory, setSelectedCategory] = useState({});
    const handleChangeCategory = (event) => {
       setSelectedCategory(event.target.value);
     };
    const amount = useRef("")
  return (
    <Container fluid>
        <Row style={{marginTop: '30px'}}>
            
            <Col />
            <Col className='col-6'  style={{ padding: '0'}}>
                {/* <TextField id="outlined-basic" label="Chọn sản phẩm" variant="outlined" size="small" /> */}
                <FormControl style={{width: "200px"}}>
                    <InputLabel id="product-label">Sản phẩm</InputLabel>
                    <Select labelId="product-label" value={selectedCategory} id={"selectValue" + props.id}
                    label="Sản phẩm" onChange={handleChangeCategory}>
                    {
                        props.categoryList.map(item => {
                            return  <MenuItem value={item.id}>{item.id + ". " + item.name + " (" + item.unit + ")"}</MenuItem>
                        })
                    }

                    </Select>
                    
                </FormControl>    
                    
            </Col>
            <Col className='col-5' style={{ padding: '0'}}>
                <TextField inputRef={amount} id={"amount" + props.id} label="Nhập số lượng" variant="outlined" size="small" type={'number'} />
            </Col>
        </Row>
    </Container>
  )
}

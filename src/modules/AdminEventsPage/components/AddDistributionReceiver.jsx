import { TextField } from '@mui/material'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddDistributionProduct from './AddDistributionProduct'


export default function AddDistribution(props) {
  return (
    <Container>
      <Row style={{marginTop: '30px'}}>
          <Col className='col-1' style={{marginTop: "5px", padding: '0'}}>
            <PersonAddAltOutlinedIcon color='primary'/>
          </Col>
          <Col className='col-6'  style={{ padding: '0'}}>
              
              <TextField id="outlined-basic" label="Chọn người nhận" variant="outlined" size="small" />
          </Col>
      </Row>
      <Row>
        <Col  style={{ padding: '0'}}>
          <AddDistributionProduct categoryList={props.categoryList}/>
        </Col>
      </Row>
      
    </Container>
  )
}

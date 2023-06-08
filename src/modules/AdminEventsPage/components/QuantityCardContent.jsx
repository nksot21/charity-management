import { Typography } from '@mui/material'
import React from 'react'

export default function QuantityCardContent(props) {
  return (
    <div style={{ width: '250px'}}>
        <Typography gutterBottom variant="body1" style={{height: '50px', lineHeight: '50px'}} component="div" className='d-inline'>
            {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='d-inline' style={{marginLeft: "20px", height: '50px', lineHeight: '50px'}}>
            
            <span style={props.amount >= 50 ? {color: "green"} : {color: "red"}}>{props.amount }</span> ({props.unit})
        </Typography>
    </div>
  )
}

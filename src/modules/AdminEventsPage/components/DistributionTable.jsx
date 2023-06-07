import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Button, Typography } from '@mui/material';

export default function DistributionTable() {
    
    // Donations List
    const [distributionSeeMore, setDistributionMore] = useState(false)
    const handleDistributionSeeMore = (e) => {
        setDistributionMore(!distributionSeeMore)
    
    }
  return (
    <div>
      <div style={{display: "flex", justifyContent: 'space-between'}}>
        <Typography fontSize={20} fontWeight={600}>
          Danh sách phân phối
        
        </Typography>
        <Button type="text" onClick={handleDistributionSeeMore}>
          {!distributionSeeMore ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
        </Button>
      </div>

    </div>
  )
}

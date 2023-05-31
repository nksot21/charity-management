import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DistributionCard from '../components/DistributionCard'

export default function Receiver() {
  return (
    <div style={{padding: "0 0 0 15px"}}>
      <Stack direction="horizontal" gap={2} className="mt-3">
            <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Trang chủ</Link>
            <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
            <Link key="Home" to="/nguoi-nhan" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Người nhận</Link>
        </Stack>

        <h3 className="mb-3 mt-3" style={{color: "#4B5264"}}><b>Quản lý danh sách người nhận</b></h3>
        <DistributionCard />
    </div>
  )
}

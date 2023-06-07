import { TablePagination } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReceiverService } from '../../../services';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Tên sự kiện', width: 400,
    type: 'link',
    renderCell: (params) =>{
      return  <Link to="/" className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.name}</span>
              </Link>
    }
     
  },
  { field: 'donor', headerName: 'Người quyên góp', width: 300,
    type: 'link',
    renderCell: (params) =>{
        let id = params.row.donor.split("-")[0].slice(3)
      return  <Link to={"/events/" + id} className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.donor}</span>
              </Link>
    }
     
  },
  {
    field: 'amount',
    headerName: 'Số lượng',
    width: 100  ,
  },
  { field: 'time', headerName: 'Thời gian', width: 150 },

];



export default function DonationItemTable(props ) {
    console.log("props.data")
  console.log(props.data)
  return (
    <div style={{ height: 400, width: '97%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  );
}

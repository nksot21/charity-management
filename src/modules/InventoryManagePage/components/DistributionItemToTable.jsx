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
  { field: 'receivername', headerName: 'Người nhận', width: 300,
    type: 'link',
    renderCell: (params) =>{
      let id = params.row.receivername.split("-")[0]
      return  <Link to={`/nguoi-nhan/${id}`} className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.receivername}</span>
              </Link>
    }
     
  },
  {
    field: 'plannedAmount',
    headerName: 'Kế hoạch',
    width: 100  ,
  },
  { field: 'actualAmount', headerName: 'Thực nhận', width: 100 },
  { field: 'status', headerName: 'Trạng thái', width: 100 },

];



export default function DistributionItemToTable(props ) {
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

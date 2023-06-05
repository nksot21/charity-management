import { TablePagination } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReceiverService } from '../../../services';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Họ và tên', width: 250,
    type: 'link',
    renderCell: (params) =>{
      return  <Link to={params.row.id} className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.name}</span>
              </Link>
    }
     
  },
  { field: 'phone', headerName: 'Số liên hệ', width: 150 },
  {
    field: 'docId',
    headerName: 'CCCD',
    width: 150  ,
  },
  {
    field: 'type',
    headerName: 'Nhóm người nhận',
    width: 175,
  },
  { field: 'description', headerName: 'Mô tả', width: 250  },
];



export default function DataTable(props ) {
  console.log(props.data)
  return (
    <div style={{ height: 700, width: '97%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
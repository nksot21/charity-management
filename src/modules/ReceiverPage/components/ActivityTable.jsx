import { TablePagination } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReceiverService } from '../../../services';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Tên hoạt động', width: 250,
    type: 'link',
    renderCell: (params) =>{
      return  <Link to={params.row.id} className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.name}</span>
              </Link>
    }
     
  },
  { field: 'startTime', headerName: 'Thời gian bắt đầu', width: 150 },
  {
    field: 'endTime',
    headerName: 'Thời gian kết thúc',
    width: 150  ,
  },
  {
    field: 'expectMoney',
    headerName: 'Mục tiêu',
    width: 150,
  },
  { field: 'receiverMoney', headerName: 'Thực nhận', width: 150  },
];



export default function ActivityTable(props ) {
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
        checkboxSelection
      />
    </div>
  );
}
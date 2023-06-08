import { TablePagination } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReceiverService } from '../../../services';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Tên hoạt động', width: 350,
    type: 'link',
    renderCell: (params) =>{
      return  <Link to={params.row.name.id} className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.name.name}</span>
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
    field: 'expect',
    headerName: 'Mục tiêu',
    width: 150,
  },
  { field: 'receiver', headerName: 'Thực nhận', width: 150  },
  { field: 'status', headerName: 'Tình trạng', width: 125  },
];



export default function ActivityTable(props ) {
  console.log('props.data')
  console.log(props.data)
  return (
    <div style={{ height: 400, width: '97%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
import { TablePagination } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReceiverService } from '../../../services';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Tên sản phẩm', width: 300,
    type: 'link',
    renderCell: (params) =>{
      return  <Link to={params.row.id} className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.name}</span>
              </Link>
    }
     
  },
  {
    field: 'unit',
    headerName: 'Đơn vị',
    width: 200  ,
  },
  { field: 'amount', headerName: 'Số lượng', width: 150 },

];



export default function ProductTable(props ) {
  console.log(props.data)
  return (
    <div style={{ height: 660, width: '97%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  );
}

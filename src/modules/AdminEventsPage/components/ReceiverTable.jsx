import { TablePagination } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReceiverService } from '../../../services';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Họ và tên', width: 300,
    type: 'link',
    renderCell: (params) =>{
      return  <Link to={params.row.id} className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.name}</span>
              </Link>
    }
     
  },
  {
    field: 'type',
    headerName: 'Nhóm người nhận',
    width: 250,
  },
  { field: 'option', headerName: 'Chọn sản phẩm', width: 275 , editable: true  },
  { field: 'amount', headerName: 'Nhập số lượng', width: 175 , editable: true, type: 'number', default: 1},
];




export default function ReceiverTable(props ) {
    const [rows, setRows] = useState(props.data);
    useEffect(()=>{
        setRows(props.data)
    }, [])
    console.log('rows')
    console.log(rows)
    const handleCellEditCommit = React.useCallback(
        ({ id, field, value }) => {
          if (field === 'option' || field === "amount" ) {
            const updatedRows = rows.map((row) => {
              if (row.id === id) {
                return { ...row, value };
              }
              return row;
            });
            setRows(updatedRows);
            console.log(updatedRows)
        }},
        [rows],
    );
  return (
    <div style={{ height: 700, width: '97%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRowData = rows.filter((row) =>
                 selectedIDs.has(row.id.toString())
                
                 )
            console.log('selectedRowData')
            console.log(selectedRowData)
            props.setDataState(selectedRowData)
        }}
        onCellEditCommit={handleCellEditCommit}
      />
    </div>
  );
}
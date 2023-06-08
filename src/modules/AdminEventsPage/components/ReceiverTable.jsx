import { TablePagination } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ReceiverService } from '../../../services';
import { Link } from 'react-router-dom';
import { useGridApiRef } from '@mui/x-data-grid';
import { connectStorageEmulator } from 'firebase/storage';


export default function ReceiverTable(props ) {
  const [rows, setRows] = useState([])
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
    { field: 'option', headerName: 'Chọn sản phẩm', width: 275 , editable: true, type: 'singleSelect', 
      valueOptions: props.selectOption
    },
    { field: 'amount', headerName: 'Nhập số lượng', width: 175 , editable: true, type: 'number'},
  ];



    const handleProcessUpdateRow = (newRow) => {
      let count  = 0
      let updatedRows = rows.map((row)=> {
              if (row.id === newRow.id) {
                count ++
                if(newRow.amount){
                  return {...row, amount: newRow.amount}
                }
                  
                else if(newRow.option){
                  return {...row, option: newRow.option}
                }
                else
                  return newRow
              }else{
                return row;
              }
              
            });
      if(count === 0)
        setRows(rows.concat(newRow))
      else{
        setRows(updatedRows)
      }
      console.log("update")
      console.log(updatedRows)
    }

      const handleCellClick = (param, event) => {
        event.stopPropagation()
      };

  // if(!isLoading)
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
        disableSelectionOnClick
        onRowSelectionModelChange={(ids) => {
          const selectedRowsData = ids.map((id) => {
            return rows.find((row) => row.id === id)
            
          })
          props.setSelectedRow(selectedRowsData)
          console.log('selectedRowsData')
          console.log(selectedRowsData)
        }}
        processRowUpdate={handleProcessUpdateRow}
        onCellClick={handleCellClick}
      />
    </div>
  );
}
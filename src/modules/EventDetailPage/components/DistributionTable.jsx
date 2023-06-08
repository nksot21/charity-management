import React, { useState, useEffect} from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import DistributionPopup from "../../AdminEventsPage/components/DistributionPopup";
import { DistributionService } from "../../../services";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FormControl } from "react-bootstrap";

export default function DistributionTable(props) {
  // Donations List
  const [distributionSeeMore, setDistributionMore] = useState(false);
  const [distributionList, setDistributionList] = useState([])
  const [distributionShow, setDistributionShow] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("");
  const handleDistributionSeeMore = (e) => {
    setDistributionMore(!distributionSeeMore);
  };

  useEffect(() => {
    retrieveDistribution()
    setLoading(false)
  }, [])

  const retrieveDistribution = () => {
    DistributionService.getDistributionByEvent(props.eventId)
    .then(res => {
      console.log("distributionTable")
      console.log(res.data.data)
      const distributionList = res.data.data
      setDistributionList(distributionList)
      let tempList = distributionList.map(item => {
        return {
          id: item.id,
          receiver: {id: item.receiver.id, name: item.receiver.name },
          category: item.item.category.name,
          amount: item.item.plannedQuantity + ` (${item.item.category.unit})`,
          status: item.status
        }
      })
      setDistributionShow(tempList)
    })
    .catch(e => console.log(e))
  }

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    search(value)
    // find(value, ['StudentName', 'StudentID']); 
  };

  const search = (value) => {
    let tempArr = [...distributionList].map((x) => x)
    let tempList = []
    tempArr.map((item) => {
      if( item?.receiver.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || item?.id.toString().includes(value) 
      || item?.item.category.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
        tempList.push({
          id: item.id,
          receiver: {id: item.receiver.id, name: item.receiver.name },
          category: item.item.category.name,
          amount: item.item.plannedQuantity + ` (${item.item.category.unit})`,
          status: item.status
        
        })
      }
      
    })
    console.log('temp')
    console.log(tempList)
    setDistributionShow(tempList)
  }

  if(!isLoading)
  return (
    <Stack marginTop={5}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontSize={20} fontWeight={600}>
          Danh sách phân phối
        </Typography>
        <IconButton onClick={handleDistributionSeeMore}>
          {!distributionSeeMore ? (
            <KeyboardArrowDownOutlinedIcon />
          ) : (
            <KeyboardArrowUpOutlinedIcon />
          )}
        </IconButton>
      </div>


      {distributionSeeMore && <div style={{ width: '100%', marginTop: '15px'  }}>
        <FormControl type="text"  className="focusNone mb-3"
                        placeholder='Tìm'
                        value={searchValue} 
                        onChange={handleSearchChange}></FormControl>
        <div style={{heigh: "500px"}}>
          <DataGrid 
            rows={distributionShow}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
        />
        </div>
      </div>
      }
    </Stack>
  );
}


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'receiver', headerName: 'Người nhận', width: 250,
    type: 'link',
    renderCell: (params) =>{
      return  <Link to={`/nguoi-nhan/REC${params.row.receiver.id}`} className=' text-decoration-none cursor  ' style={{alignItems: "center"}}>
                <span>{params.row.receiver.name}</span>
              </Link>
    }
     
  },
  { field: 'category', headerName: 'Sản phẩm', width: 150 },
  {
    field: 'amount',
    headerName: 'Số lượng',
    width: 120  ,
  },
  {
    field: 'status',
    headerName: 'Trạng thái ',
    width: 120,
  },
];


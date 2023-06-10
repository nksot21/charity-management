import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&:nth-child(3)`]: {
    color: "#29bf12",
    fontSize: 18,
  },
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2a9d8f",
    color: theme.palette.common.white,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Items({ donations }) {
  const navigate = useNavigate();
  const count = donations.filter(
    (donation) => donation.transfer === null
  ).length;

  const seeAllHandler = () => {
    navigate("/quyen-gop", {
      state: {
        username: donations[0].donor.username,
      },
    });
  };

  return (
    <Stack
      marginTop={4}
      boxShadow="0 0 10px #00000022"
      paddingX={2}
      paddingY={3}
      borderRadius={2}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontSize={26} fontWeight={200}>
          Các loại quyên góp khác
        </Typography>
        {count > 0 && (
          <Button
            variant="contained"
            size="medium"
            style={{ textTransform: "none", backgroundColor: "#2a9d8f" }}
            onClick={() => seeAllHandler()}
          >
            Xem tất cả
          </Button>
        )}
      </Stack>
      <Stack marginTop={2}>
        {count > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Thời gian</StyledTableCell>
                  <StyledTableCell>Loại</StyledTableCell>
                  <StyledTableCell>Số lượng</StyledTableCell>
                  <StyledTableCell>Đơn vị</StyledTableCell>
                  <StyledTableCell>Sự kiện</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {donations
                  .filter((donation) => donation.transfer === null)
                  .map((row) => (
                    <StyledTableRow key={row.item.time}>
                      <StyledTableCell>
                        {format(new Date(row.item.time), "dd/MM/yyyy hh:mm:ss")}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.item.category.name}
                      </StyledTableCell>
                      <StyledTableCell>{row.item.amount}</StyledTableCell>
                      <StyledTableCell>
                        {row.item.category.unit}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button
                          variant="contained"
                          size="small"
                          style={{ backgroundColor: "#2a9d8f" }}
                          onClick={() => navigate("/su-kien/" + row.event.id)}
                        >
                          Xem
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {count === 0 && (
          <Typography textAlign={"center"}>Không có dữ liệu</Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default Items;

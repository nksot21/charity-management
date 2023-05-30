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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&:last-child`]: {
    color: "#29bf12",
    fontSize: "18px",
  },
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2a9d8f",
    color: theme.palette.common.white,
    fontSize: 17,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
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

function Transfers({ transfers }) {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" fontSize={26} fontWeight={200} marginTop={4}>
          Giao dịch gần đây
        </Typography>
        <Button variant="contained" size="medium">
          Xem tất cả
        </Button>
      </Stack>
      <Stack marginTop={1}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Thời gian</StyledTableCell>
                <StyledTableCell>Ngân hàng</StyledTableCell>
                <StyledTableCell>Người chuyển</StyledTableCell>
                <StyledTableCell>Nội dung</StyledTableCell>
                <StyledTableCell>Số tiền</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transfers.map((row) => (
                <StyledTableRow key={row.content}>
                  <StyledTableCell>{row.time}</StyledTableCell>
                  <StyledTableCell>{row.bank}</StyledTableCell>
                  <StyledTableCell>{row.donor}</StyledTableCell>
                  <StyledTableCell>{row.content}</StyledTableCell>
                  <StyledTableCell>{row.amount}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}

export default Transfers;

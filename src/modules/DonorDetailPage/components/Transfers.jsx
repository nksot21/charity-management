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

function Transfers({ transfers }) {
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
          Giao dịch gần đây
        </Typography>
        <Button
          variant="contained"
          size="medium"
          style={{ textTransform: "none", backgroundColor: "#2a9d8f" }}
        >
          Xem tất cả
        </Button>
      </Stack>
      <Stack marginTop={2}>
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

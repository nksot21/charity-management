import { Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Modal from "../../../globalComponents/Modal/Modal";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { format } from "date-fns";

function TransferPopup({ onCloseModal }) {
  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Typography variant="h6">Chi tiết giao dịch</Typography>
        <Divider style={{ marginTop: "8px" }} />
        <Stack marginTop={1} spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography width={"40%"}>Số tài khoản: </Typography>
            <Chip label="0193247824" />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography width={"40%"}>Ngân hàng: </Typography>
            <Chip label="Vietcombank" />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography width={"40%"}>Nội dung: </Typography>
            <Chip
              sx={{
                height: "auto",
                width: "50%",
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                },
              }}
              label="Chuyen tien ung ho quy vi tre em vung sau vung xa"
            />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography width={"40%"}>Số tiền: </Typography>
            <Chip label={currencyFormatter.format(200000)} />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography width={"40%"}>Thời gian: </Typography>
            <Chip label={format(new Date(), "hh:mm:ss dd-MM-yyyy")} />
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default TransferPopup;

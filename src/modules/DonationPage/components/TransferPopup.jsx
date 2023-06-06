import { Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Modal from "../../../globalComponents/Modal/Modal";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { format } from "date-fns";

function TransferPopup({ onCloseModal, transfer, item }) {
  return (
    <Modal onCloseModal={onCloseModal}>
      {transfer && (
        <Stack>
          <Typography variant="h6">Chi tiết giao dịch</Typography>
          <Divider style={{ marginTop: "8px" }} />
          <Stack marginTop={1} spacing={1}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography width={"40%"}>Số tài khoản: </Typography>
              <Chip label={transfer.account} />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography width={"40%"}>Ngân hàng: </Typography>
              <Chip label={transfer.bank} />
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
                label={transfer.content}
              />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography width={"40%"}>Số tiền: </Typography>
              <Chip label={currencyFormatter.format(transfer.amount)} />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography width={"40%"}>Thời gian: </Typography>
              <Chip
                label={format(new Date(transfer.time), "hh:mm:ss dd-MM-yyyy")}
              />
            </Stack>
          </Stack>
        </Stack>
      )}
      {item && (
        <Stack>
          <Typography variant="h6">Thông tin vật phẩm</Typography>
          <Stack marginTop={1} spacing={1}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography width={"40%"}>Số lượng: </Typography>
              <Chip label={item.amount} />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography width={"40%"}>Loại: </Typography>
              <Chip label={item.category.name} />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography width={"40%"}>Đơn vị tính: </Typography>
              <Chip label={item.category.unit} />
            </Stack>
          </Stack>
        </Stack>
      )}
    </Modal>
  );
}

export default TransferPopup;

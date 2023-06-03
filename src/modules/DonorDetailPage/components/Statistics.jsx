import { Stack, Typography } from "@mui/material";
import React from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";

function Statistics({ donor }) {
  return (
    <Stack
      boxShadow="0 0 10px #00000022"
      paddingX={2}
      paddingY={3}
      borderRadius={2}
    >
      <Typography variant="h6" fontSize={26} fontWeight={200}>
        Thống kê từ thiện
      </Typography>
      <Stack direction="row" spacing={2} marginTop={1}>
        <Stack
          style={{ backgroundColor: "#c7f9cc" }}
          borderLeft="3px solid #38a3a5"
          paddingX={3}
          paddingY={1}
          width={"50%"}
        >
          <Typography>Tổng quyên góp</Typography>
          <Typography variant="h5" fontWeight="600" color="#38a3a5">
            {currencyFormatter.format(donor.totalTransferAmount)}
          </Typography>
        </Stack>
        <Stack
          style={{ backgroundColor: "#caf0f8" }}
          borderLeft="3px solid #0077b6"
          paddingX={3}
          paddingY={1}
          width={"50%"}
        >
          <Typography>Tổng vật phẩm quyên góp</Typography>
          <Typography variant="h5" fontWeight="600" color="#38a3a5">
            {donor.totalItemAmount}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Statistics;

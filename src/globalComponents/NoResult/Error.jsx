import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import warning from "../../assets/images/warning.png";

function SomethingWentWrong({ error = "Có lỗi xảy ra! Vui lòng thử lại" }) {
  return (
    <Stack alignItems={"center"} marginTop={6} width={"100%"}>
      <Avatar variant="square" src={warning} sx={{ width: 200, height: 200 }} />
      <Typography fontSize={20} marginTop={1}>
        {error}
      </Typography>
    </Stack>
  );
}

export default SomethingWentWrong;

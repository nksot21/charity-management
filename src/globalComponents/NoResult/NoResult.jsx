import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import noResult from "../../assets/images/no-results.png";

function NoResult() {
  return (
    <Stack alignItems={"center"} marginTop={6}>
      <Avatar variant="square" src={noResult} sx={{ width: 80, height: 80 }} />
      <Typography fontSize={20} marginTop={1}>Không tìm thấy kết quả phù hợp!</Typography>
    </Stack>
  );
}

export default NoResult;

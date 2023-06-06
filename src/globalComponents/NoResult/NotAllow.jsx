import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";
import people from "../../assets/images/people.png";
import { Link } from "react-router-dom";

function NotAllow() {
  return (
    <Stack alignItems={"center"} marginY={6}>
      <Avatar variant="square" src={people} sx={{ width: 280, height: 280 }} />
      <Typography fontSize={20} marginTop={1}>
        Bạn không có quyền truy cập trang web này
      </Typography>
      <Button variant="contained" style={{ marginTop: 32 }}>
        <Link
          to={"/trang-chu"}
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Trở về trang chủ
        </Link>
      </Button>
    </Stack>
  );
}

export default NotAllow;

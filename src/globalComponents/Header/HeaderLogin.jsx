import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderLogin() {
  const navigate = useNavigate();

  return (
    <Stack>
      <Button
        variant="contained"
        style={{ backgroundColor: "#060" }}
        onClick={() => navigate("dang-nhap")}
      >
        Đăng nhập
      </Button>
    </Stack>
  );
}

export default HeaderLogin;

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderAccount() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openPopup = Boolean(anchorEl);
  return (
    <Stack
      direction={"row"}
      spacing={1}
      alignItems={"center"}
      padding={"3px"}
      paddingRight={1}
      style={{ backgroundColor: "white", cursor: "pointer" }}
      borderRadius={10}
      border={"2px solid #ddd"}
      onClick={!openPopup ? handleClick : handleClose}
      id="menu"
    >
      <Avatar src="" sx={{ height: 38, width: 38 }}></Avatar>
      <Stack>
        <Typography>Lê Văn Thiện</Typography>
      </Stack>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={openPopup}
        onClose={handleClose}
        style={{ marginTop: "4px" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link style={{ textDecoration: "none" }}>Trang cá nhân</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={{ textDecoration: "none" }}>Đăng xuất</Link>
        </MenuItem>
      </Menu>
    </Stack>
  );
}

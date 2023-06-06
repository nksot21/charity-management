import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";

export default function HeaderAccount({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    dispatch(authActions.logUserOut());
    navigate("/trang-chu");
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
      <Avatar src={user.photo} sx={{ height: 38, width: 38 }}></Avatar>
      <Stack>
        <Typography>
          {user.name.length > 15 ? user.name.slice(0, 15) + "..." : user.name}
        </Typography>
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
          <Button onClick={() => navigate("/donors/profile")}>
            Trang cá nhân
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button style={{ textDecoration: "none" }} onClick={logoutHandler}>
            Đăng xuất
          </Button>
        </MenuItem>
      </Menu>
    </Stack>
  );
}

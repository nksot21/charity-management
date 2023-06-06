import React from "react";
import LogoImg from "../../assets/images/global/logoHor.png";
import { Col, Container, Row } from "react-bootstrap";
import HeaderNotification from "./HeaderNotification";
import HeaderAccount from "./HeaderAccount";
import "./Header.css";
import { Link } from "react-router-dom";
import { IconButton, Stack } from "@mui/material";
import HeaderLogin from "./HeaderLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";

export default function Header() {
  const dispatch = useDispatch()

  return (
    <Stack
      style={{ zIndex: 10, backgroundColor: "white" }}
      direction={"row"}
      height={70}
      alignItems={"center"}
      spacing={3}
      paddingX={2}
      borderBottom={"1px solid #ccc"}
      position={"sticky"}
      top={0}
    >
      <IconButton
        sx={{ width: 50, height: 50 }}
        onClick={() => dispatch(uiActions.toggleMenu())}
      >
        <FontAwesomeIcon color="#444" icon={faBars} />
      </IconButton>
      <Stack>
        <Link to="/trang-chu">
          <img
            src={LogoImg}
            style={{
              lineHeight: "46px",
              height: "46px",
              padding: "3px",
              objectFit: "contain",
            }}
          />
        </Link>
      </Stack>
      <Stack
        direction={"row"}
        flexGrow={1}
        justifyContent={"end"}
        spacing={3}
        height={"100%"}
        alignItems={"center"}
      >
        <Link to="/" className="header-link">
          Giới thiệu
        </Link>
        <Link to="/trang-chu" className="header-link">
          Trang chủ
        </Link>
        <Link to="/events" className="header-link">
          Sự kiện
        </Link>
        <Link to="/donors" className="header-link">
          Nhà hảo tâm
        </Link>
      </Stack>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <HeaderNotification />
        <HeaderAccount />
      </Stack>
      {/* <HeaderLogin /> */}
    </Stack>
  );
}

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
<<<<<<< HEAD
        <Row>
          {/* Header Logo */}
          <Col className="col-4">
            <div className="d-flex justify-content-around">
              <a href="#">
                <img
                  src={LogoImg}
                  style={{
                    lineHeight: "46px",
                    height: "46px",
                    padding: "3px",
                    objectFit: "contain",
                  }}
                />
              </a>
            </div>
          </Col>
          <Col className="col-2"></Col>
          {/* Account Info */}
          <Col className="col-4 justify-content-around d-flex header-menu-item">
            <div style={{ lineHeight: "46px", height: "46px" }}>
              <Link
                to="/gioi-thieu"
                style={{
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Giới thiệu
              </Link>
            </div>
            <div style={{ lineHeight: "46px", height: "46px" }}>
              <Link
                to="/"
                style={{
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Trang chủ
              </Link>
            </div>
            <div style={{ lineHeight: "46px", height: "46px" }}>
              <Link
                to="/events"
                style={{
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Sự kiện
              </Link>
            </div>
            <div style={{ lineHeight: "46px", height: "46px" }}>
              <Link
                to="/donors"
                style={{
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Nhà hảo tâm
              </Link>
            </div>
          </Col>
          <Col
            className="col-2 d-flex justify-content-end"
            style={{ paddingRight: "25px" }}
          >
            <HeaderNotification />
            <HeaderAccount />
          </Col>
        </Row>
      </Container>
    </div>
=======
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
>>>>>>> dev
  );
}

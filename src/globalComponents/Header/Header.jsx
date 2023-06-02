import React from "react";
import LogoImg from "../../assets/images/global/logoHor.png";
import { Col, Container, Row } from "react-bootstrap";
import HeaderNotification from "./HeaderNotification";
import HeaderAccount from "./HeaderAccount";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="sticky-top header-disable-copy" style={{zIndex: 10}}>
      <Container
        fluid
        style={{
          height: "70px",
          padding: "12px",
          backgroundColor: "white",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
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
                to="/"
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
                to="/trang-chu"
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
  );
}

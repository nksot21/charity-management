import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import DonorCard from "./DonorCard";
import "./DonorList.css";
import { Link } from "react-router-dom";

export default function DonorList() {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Container
      fluid
      style={{
        width: "100%",
        backgroundColor: "#F2D8D8",
        marginTop: "50px",
        paddingTop: "50px",
      }}
    >
      <Row>
        <Col style={{ textAlign: "center" }}>
          <p className="donor-heading-1">Dành cho nhà hảo tâm</p>
          <div className="donor-line mx-auto" />
          <p className="donor-text">
            Xem sao kê tài khoản thiện nguyện minh bạch
          </p>
        </Col>
      </Row>

      <Row>
        <Col style={{ padding: "50px 200px 20px 200px" }}>
          <Slider {...settings}>
            {userArray.map((user) => (
              <DonorCard
                id={user.id}
                name={user.name}
                email={user.email}
                date={user.date}
              />
            ))}
          </Slider>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", width: "fit-content", paddingBottom: "50px" }}>
          <Button>
            <Link to="/donors" style={{color: "white", textDecoration: "none"}}>Xem tất cả</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

const userArray = [
  {
    id: "00723",
    name: "Jennie Kim",
    email: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    email: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    email: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    email: "@JennieRubyJane",
    date: "07/2022",
  },
];

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserImg from "../../../assets/images/landingpage/jennie.png";
import "./DonorCard.css";
import { useNavigate } from "react-router-dom";

export default function DonorCard(props) {
  const navigate = useNavigate();
  return (
    <Container
      style={{
        height: "255px",
        width: "335px",
        backgroundColor: "#FCFCFD",
        padding: "28px",
        borderRadius: "12px",
        border: "solid 3px #F1F1F3",
      }}
    >
      <Row
        onClick={() => {
          navigate("/donors/" + props.id);
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <Col className="col-4">
          <img
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              border: "2px solid #075233",
              borderRadius: "40px",
            }}
            src={UserImg}
          />
        </Col>
        <Col className="col-8 d-flex" style={{ flexDirection: "column" }}>
          <p className="card-heading-1">{props?.name}</p>
          <p className="card-heading-2" style={{ marginBottom: "28px" }}>
            {props?.email}
          </p>
        </Col>
        <div className="card-line" />
      </Row>
      <Row>
        <Col>
          <p className="card-heading-2" style={{ marginBottom: "5px" }}>
            Tài khoản từ thiện số: <span>{props?.id}</span>
          </p>
          <p className="card-heading-2" style={{ marginBottom: "18px" }}>
            Tham gia từ: {props?.date}
          </p>
          <a className="card-heading-2" href="#">
            {" "}
            Xem sao kê
          </a>
        </Col>
      </Row>
    </Container>
  );
}

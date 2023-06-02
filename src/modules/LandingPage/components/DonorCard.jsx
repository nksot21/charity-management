import React from "react";
import UserImg from "../../../assets/images/landingpage/jennie.png";
import "./DonorCard.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export default function DonorCard(props) {
  const navigate = useNavigate();
  return (
    <Stack boxShadow={"0 0 10px #00000033"} padding={2} borderRadius={3}>
      <Stack
        onClick={() => {
          navigate("/donors/" + props.id);
        }}
        style={{
          cursor: "pointer",
        }}
        direction={"row"}
        spacing={2}
        paddingBottom={1}
        borderBottom={"1px solid #060"}
      >
        <Avatar
          sx={{ width: 70, height: 70 }}
          src={UserImg}
          style={{ border: "2px solid #060" }}
        />
        <Stack justifyContent={"center"}>
          <Typography fontSize={18} fontWeight={"bold"}>
            {props?.name}
          </Typography>
          <Typography>{props?.username}</Typography>
        </Stack>
        <div className="card-line" />
      </Stack>
      <Stack marginTop={2}>
        <Typography>
          Tài khoản từ thiện số:{" "}
          <span
            style={{
              backgroundColor: "#ddd",
              padding: "3px 18px",
              fontWeight: "bold",
              borderRadius: "15px",
            }}
          >
            {props?.id}
          </span>
        </Typography>
        <Typography marginTop={1}>
          Tham gia từ:
          <span style={{ fontWeight: "bold" }}> {props?.date}</span>{" "}
        </Typography>
        <Button style={{ marginTop: "16px" }}>
          <Link to={"/donors/" + props.id} style={{ textDecoration: "none" }}>
            Xem sao kê
          </Link>
        </Button>
      </Stack>
    </Stack>
  );
}

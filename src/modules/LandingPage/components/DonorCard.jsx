import React from "react";
import "./DonorCard.css";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { format } from "date-fns";

export default function DonorCard({ donor }) {
  const navigate = useNavigate();
  return (
    <Stack
      boxShadow={"0 0 10px #00000033"}
      padding={2}
      borderRadius={3}
      style={{ backgroundColor: "white" }}
    >
      <Stack
        onClick={() => {
          navigate("/donors/" + donor.id);
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
          src={donor?.photo}
          style={{ border: "2px solid #060" }}
        />
        <Stack justifyContent={"center"}>
          <Typography fontSize={18} fontWeight={"bold"}>
            {donor?.name}
          </Typography>
          <Typography>{donor?.username}</Typography>
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
            {donor?.id}
          </span>
        </Typography>
        <Typography marginTop={1}>
          Tham gia từ:
          <span style={{ fontWeight: "bold" }}> {format(new Date(donor?.joinDate), 'dd/MM/yyyy') }</span>{" "}
        </Typography>
        <Button style={{ marginTop: "16px" }}>
          <Link to={"/donors/" + donor.id} style={{ textDecoration: "none" }}>
            Xem sao kê
          </Link>
        </Button>
      </Stack>
    </Stack>
  );
}

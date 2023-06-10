import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { format } from "date-fns";

export default function DonorCard({ donor }) {
  const navigate = useNavigate();

  const seeTransferHandler = () => {
    navigate("/nha-hao-tam/" + donor.id, { state: { seeTransfers: true } });
  };

  return (
    <Stack
      boxShadow={"0 0 10px #00000033"}
      padding={2}
      borderRadius={3}
      style={{ backgroundColor: "white" }}
    >
      <Stack
        onClick={() => {
          navigate("/nha-hao-tam/" + donor.id);
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
      </Stack>
      <Stack marginTop={2}>
        <Typography>Tài khoản từ thiện số: {donor?.id}</Typography>
        <Typography marginTop={1}>
          Tham gia từ:
          <span style={{ fontWeight: "bold" }}>
            {" "}
            {format(new Date(donor?.joinDate), "dd/MM/yyyy")}
          </span>{" "}
        </Typography>
        <Typography marginTop={1}>
          Điểm:{" "}
          <span
            style={{
              backgroundColor: "#ddd",
              padding: "3px 18px",
              fontWeight: "bold",
              borderRadius: "15px",
            }}
          >
            {donor.score}
          </span>
        </Typography>
        <Button style={{ marginTop: "16px" }} onClick={seeTransferHandler}>
          Xem sao kê
        </Button>
      </Stack>
    </Stack>
  );
}

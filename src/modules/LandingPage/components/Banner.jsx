import React from "react";
import LogoImg from "../../../assets/images/global/logo.png";
import "./Banner.css";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const joinHandler = () => {
    if (role === "GUESS") {
      navigate("/dang-ky");
    } else navigate("/su-kien");
  };

  return (
    <Stack className="banner" height={500} padding={2}>
      <Stack
        direction={"row"}
        spacing={10}
        alignItems={"center"}
        height={"100%"}
      >
        <Stack>
          <img
            src={LogoImg}
            className="mx-auto d-block"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Stack>
        <Stack marginTop={4}>
          <Stack>
            <Typography color={"#075234"} variant="h1" fontSize={80}>
              ASHEEP CHARITY ORGANIZATION
            </Typography>
            <Typography fontSize={30} marginTop={1}>
              aSheep đồng hành cùng cộng đồng từ thiện minh bạch{" "}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        spacing={3}
        marginTop={6}
        justifyContent={"center"}
      >
        <Button
          variant="contained"
          size="large"
          color="success"
          style={{ fontWeight: "bold", width: 200 }}
          onClick={joinHandler}
        >
          Tham gia ngay
        </Button>
        <Button
          size="large"
          color="success"
          variant="outlined"
          style={{
            fontWeight: "bold",
            borderWidth: "2px",
            width: 200,
            backgroundColor: "#ffffff66",
          }}
        >
          Liên hệ
        </Button>
      </Stack>
    </Stack>
  );
}

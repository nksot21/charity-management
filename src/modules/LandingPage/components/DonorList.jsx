import React, { useState } from "react";
import DonorCard from "./DonorCard";
import { Link } from "react-router-dom";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Import Swiper styles
// import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";

export default function DonorList() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <Stack style={{ backgroundColor: "#F2D8D8" }} marginTop={6} paddingY={3}>
      <Stack textAlign={"center"}>
        <Typography variant="h4">Dành cho nhà hảo tâm</Typography>
        <div className="donor-line mx-auto mt-2" />
        <Typography fontSize={18}>
          Xem sao kê tài khoản thiện nguyện minh bạch
        </Typography>
      </Stack>

      <Stack
        marginX={10}
        marginTop={4}
        position="relative"
        direction="row"
        alignItems="center"
      >
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          spaceBetween={30}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          modules={[FreeMode, Navigation]}
          style={{
            padding: "4px",
          }}
          width={"100%"}
        >
          {userArray.map((user) => (
            <SwiperSlide key={Math.random()}>
              <DonorCard
                id={user.id}
                name={user.name}
                email={user.email}
                date={user.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          className="prevBtn"
          sx={{
            position: "absolute",
            zIndex: "100",
            left: "-60px",
            padding: 0,
          }}
        >
          <ChevronLeft
            sx={{
              fontSize: "50px",
            }}
          />
        </IconButton>
        <IconButton
          className="nextBtn"
          sx={{
            position: "absolute",
            zIndex: "100",
            right: "-60px",
            padding: 0,
          }}
        >
          <ChevronRight
            sx={{
              fontSize: "50px",
            }}
          />
        </IconButton>
      </Stack>
      <Stack alignItems={"center"} marginTop={3}>
        <Button color="success" variant="contained">
          <Link to="/donors" style={{ color: "white", textDecoration: "none" }}>
            Xem tất cả
          </Link>
        </Button>
      </Stack>
    </Stack>
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
    id: "00724",
    name: "Jennie Kim",
    email: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00725",
    name: "Jennie Kim",
    email: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00726",
    name: "Jennie Kim",
    email: "@JennieRubyJane",
    date: "07/2022",
  },
];

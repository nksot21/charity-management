import React from "react";
import BannerImg from "../../../assets/images/global/banner.png";
import Banner from "../components/Banner";
import Introduction from "../components/Introduction";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack } from "@mui/material";
import "./LandingPage.css";
import Leaderboard from "../components/Leaderboard";

function LandingPage() {
  return (
    <Stack>
      <Banner />
      <Introduction />
      <Leaderboard/>
    </Stack>
  );
}

export default LandingPage;

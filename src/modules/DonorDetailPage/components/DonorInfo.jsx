import React, { useState } from "react";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import quote from "../../../assets/images/quote.png";
import { Link } from "react-router-dom";
import DonorInfoPage from "../screens/DonorInfoPage";
import { format } from "date-fns";

function DonorInfo({ onDonation = false, donor }) {
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  return (
    <Stack position="sticky" top={100} left={0}>
      <Stack direction="row" spacing={4} alignItems={"center"}>
        <Avatar
          sx={{ width: 170, height: 170, boxShadow: "0 0 10px #00000022" }}
          src={donor.image}
        />
        <Stack paddingTop={3} flexGrow={1}>
          <Typography variant="h5" fontWeight={600}>
            {donor.name}
          </Typography>
          <Typography>{donor.username}</Typography>
          <Typography marginTop={3}>
            Tham gia từ {format(new Date(donor.joinDate), "dd/MM/yyyy")}
          </Typography>
          <Typography>Mã tài khoản: {donor.id}</Typography>
          <Typography>
            Điểm:{" "}
            <span style={{ fontWeight: 600, fontSize: 18 }}>{donor.score}</span>
          </Typography>
          {!onDonation && (
            <Stack alignItems="end" marginTop={2}>
              <Button
                variant="contained"
                size="small"
                style={{ textTransform: "none" }}
                onClick={() => setIsShowingInfo(true)}
              >
                Thông tin chi tiết
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
      <Stack
        position={"relative"}
        marginTop={3}
        style={{ backgroundColor: "#fff6e0" }}
        padding={2}
      >
        <Avatar
          src={quote}
          variant="square"
          sx={{ width: 40, height: 40 }}
          style={{ position: "absolute", top: "-15px", right: "-10px" }}
        />
        <Typography fontStyle="italic">{donor.slogan}</Typography>
      </Stack>
      {onDonation && (
        <Stack alignItems="end" marginTop={2}>
          <Button
            variant="contained"
            size="small"
            style={{ textTransform: "none" }}
            onClick={() => setIsShowingInfo(true)}
          >
            <Link
              to={"/donors/123"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Xem trang chi tiết
            </Link>
          </Button>
        </Stack>
      )}
      {isShowingInfo && (
        <DonorInfoPage
          onCloseModal={() => setIsShowingInfo(false)}
          donor={donor}
        />
      )}
    </Stack>
  );
}

export default DonorInfo;

import React, { useState } from "react";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import quote from "../../../assets/images/quote.png";
import { Link } from "react-router-dom";
import DonorInfoPage from "../screens/DonorInfoPage";

function DonorInfo({ onDonation = false }) {
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  return (
    <Stack position="sticky" top={100} left={0}>
      <Stack direction="row" spacing={4} alignItems={"center"}>
        <Avatar
          sx={{ width: 170, height: 170, boxShadow: "0 0 10px #00000022" }}
          src={
            "https://static.thiennguyen.app/public/user/profile/2023/2/24/649fb301-da9c-4d4b-be74-bca32ece39ae.jpg"
          }
        />
        <Stack paddingTop={3} flexGrow={1}>
          <Typography variant="h5" fontWeight={600}>
            Quỹ Hạnh Phúc Cho Mọi Người
          </Typography>
          <Typography>@quyhanhphucchomoinguoi</Typography>
          <Typography marginTop={3}>Tham gia từ 2/2023</Typography>
          <Typography>Mã tài khoản: 06</Typography>
          <Typography>
            Điểm: <span style={{ fontWeight: 600, fontSize: 18 }}>340</span>
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
        padding={2}
        borderRadius={3}
        style={{ backgroundColor: "#fff5e3" }}
        position="relative"
        marginTop={3}
      >
        <Stack
          height={40}
          width={40}
          overflow="hidden"
          position="absolute"
          right="-15px"
          top="-15px"
        >
          <img src={quote} height="100%" />
        </Stack>
        <Typography fontStyle="italic">
          “Quỹ Hạnh phúc cho mọi người được Bộ Nội Vụ cấp phép hoạt động là Quỹ
          từ thiện hoạt động không vì lợi nhuận nhằm mục đích kêu gọi tài trợ
          phẫu thuật tim bẩm sinh cho trẻ em dưới 16 tuổi và hỗ trợ cho bệnh
          nhân mắc bệnh hiểm nghèo có hoàn cảnh khó khăn.”
        </Typography>
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
        <DonorInfoPage onCloseModal={() => setIsShowingInfo(false)} />
      )}
    </Stack>
  );
}

export default DonorInfo;

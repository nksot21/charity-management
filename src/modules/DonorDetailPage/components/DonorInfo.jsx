import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import quote from "../../../assets/images/quote.png";
import { Link } from "react-router-dom";
import DonorInfoPage from "../screens/DonorInfoPage";

function DonorInfo() {
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  return (
    <Stack position="sticky" top={100} left={0}>
      <Stack direction="row" spacing={4}>
        <Stack
          height={180}
          width={180}
          justifyContent="center"
          borderRadius="200px"
          overflow="hidden"
          style={{ boxShadow: "0 0 10px #00000022" }}
          flexShrink={0}
        >
          <img
            height="100%"
            width="100%"
            src="https://static.thiennguyen.app/public/user/profile/2023/2/24/649fb301-da9c-4d4b-be74-bca32ece39ae.jpg"
          ></img>
        </Stack>
        <Stack paddingTop={3}>
          <Typography variant="h5" fontWeight={600}>
            Quỹ Hạnh Phúc Cho Mọi Người
          </Typography>
          <Typography>@quyhanhphucchomoinguoi</Typography>
          <Typography marginTop={3}>Tham gia từ 2/2023</Typography>
          <Typography>Mã tài khoản: 06</Typography>
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
      {isShowingInfo && (
        <DonorInfoPage onCloseModal={() => setIsShowingInfo(false)} />
      )}
    </Stack>
  );
}

export default DonorInfo;

import React from "react";
import {
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import quote from "../../../assets/images/quote.png";

function DonorInfo() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Stack
          height={200}
          width={200}
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
    </>
  );
}

export default DonorInfo;

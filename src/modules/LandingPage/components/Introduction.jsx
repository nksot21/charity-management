import React from "react";
import "./Introduction.css";
import transparentImg from "../../../assets/images/landingpage/pen.png";
import connectionImg from "../../../assets/images/landingpage/vector.png";
import convenientImg from "../../../assets/images/landingpage/drawing.png";
import { Stack, Typography } from "@mui/material";
export default function Introduction() {
  return (
    <Stack marginTop={8} paddingX={"160px"}>
      <Stack textAlign={"center"} paddingX={10}>
        <Typography variant="h4">Giới thiệu chung</Typography>
        <div className="intro-line mx-auto mt-2" />
        <Typography fontSize={20}>
          Tổ chức từ thiện aSheep cung cấp cho các nhà hảo tâm một nền tảng từ
          thiện minh bạch, thuận tiện, theo dõi và chia sẻ thông tin. aSheep
          được xây dựng với sứ mệnh mang đến cho các nhà hảo tâm một công cụ
          minh bạch, rõ ràng và thuận tiện nhất giúp các nhà hảo tâm yên tâm
          trong việc quyên góp cho các hoạt động từ thiện.
        </Typography>
      </Stack>
      <Stack direction={"row"} marginTop={4} spacing={4}>
        <Stack textAlign={"center"}>
          <img
            className="mx-auto d-block"
            style={{ width: "75px", height: "75px", objectFit: "contain" }}
            src={transparentImg}
          />
          <Typography marginTop={2} fontSize={20} fontWeight={"bold"}>
            Minh bạch
          </Typography>
          <Typography marginTop={2} fontSize={18}>
            Giúp bạn nhanh chóng thiết lập mục tiêu, minh bạch sao kê tài khoản,
            lập báo cáo thu chi theo quy định, đăng bài viết, cập nhật các hoạt
            động, kết nối với nhà hảo tâm mọi lúc mọi nơi.
          </Typography>
        </Stack>
        <Stack textAlign={"center"}>
          <img
            className="mx-auto d-block"
            style={{ width: "75px", height: "75px", objectFit: "contain" }}
            src={connectionImg}
          />
          <Typography marginTop={2} fontSize={20} fontWeight={"bold"}>
            Kết nối
          </Typography>
          <Typography marginTop={2} fontSize={18}>
            Kết nối bạn với các nhà hảo tâm khác và kết nối trực tiếp với các
            chiến dịch, giúp bạn có thể nắm bắt thông tin chi tiết hơn và cảm
            thấy yên tâm khi đóng góp cho aSheep.
          </Typography>
        </Stack>
        <Stack textAlign={"center"}>
          <div>
            <img
              className="mx-auto d-block"
              style={{ width: "75px", height: "75px", objectFit: "contain" }}
              src={convenientImg}
            />
            <Typography marginTop={2} fontSize={20} fontWeight={"bold"}>
              Thuận tiện
            </Typography>
            <Typography marginTop={2} fontSize={18}>
              Giúp bạn ủng hộ trực tuyến thuận tiện và minh bạch, giám sát sao
              kê tài khoản thiện nguyện, lựa chọn theo dõi và đồng hành cùng các
              chiến dịch bạn quan tâm, dễ dàng tương tác, hỗ trợ các chiến dịch.
            </Typography>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
}

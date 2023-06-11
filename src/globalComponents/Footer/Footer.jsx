import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Stack style={{ backgroundColor: "#075233" }} paddingY={4} paddingX={5}>
      <Grid container columnSpacing={8}>
        <Grid item xs={6}>
          <Stack padding={2}>
            <Typography color={"white"} fontSize={20} fontWeight={"bold"}>
              Về chúng tôi
            </Typography>
            <Typography color={"white"} fontSize={16} marginTop={1}>
              Chào mừng bạn đến với aSheep Charity! Chúng tôi là một tổ chức phi
              lợi nhuận với mục tiêu tạo ra sự thay đổi tích cực trong cộng
              đồng. Với sự đồng hành của những tình nguyện viên và nhà hảo tâm,
              chúng tôi đã thực hiện nhiều dự án quan trọng như giáo dục, sức
              khỏe và môi trường. Hãy cùng aSheep Charity xây dựng một tương lai
              tốt đẹp hơn cho tất cả mọi người.
            </Typography>
            <Typography color={"white"} marginTop={2} textAlign={"end"}>
              aSheep Charity
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack padding={2}>
            <Typography color={"white"} fontSize={20}>
              Liên hệ với chúng tôi
            </Typography>
            <Stack marginTop={3} spacing={2} overflow={"hidden"}>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#1982c4"
                  fontSize={28}
                />
                <Typography color={"white"}>
                  asheepcharity109@gmail.com
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <FontAwesomeIcon icon={faPhone} color="#ffca3a" fontSize={28} />
                <Typography color={"white"}>0343130769</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color="#8ac926"
                  fontSize={28}
                />
                <Typography color={"white"}>
                  Ký túc xá khu A, Đông Hòa, Dĩ An, Bình Dương
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack padding={2}>
            <Typography color={"white"} fontSize={20}>
              aSheep Charity
            </Typography>
            <Stack marginTop={3} spacing={2}>
              <Typography color={"white"}>Lê Văn Thiện</Typography>
              <Typography color={"white"}>Nguyễn Đỗ Nhã Khuyên</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

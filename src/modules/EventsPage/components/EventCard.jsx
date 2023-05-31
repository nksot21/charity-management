import React from "react";
import { Stack, Typography } from "@mui/material";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { useNavigate } from "react-router";

function EventCard({ event }) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/events/" + event.id);
  };
  return (
    <Stack
      borderRadius={3}
      overflow="hidden"
      boxShadow="0 0 10px #00000033"
      position={"relative"}
      onClick={navigateHandler}
    >
      <Stack
        height={300}
        position="relative"
        justifyContent={"center"}
        alignItems={"center"}
        overflow={"hidden"}
      >
        <img
          height="100%"
          src={
            "https://static.thiennguyen.app/public/donate-target/photo/2023/3/8/ce83ad23-bc2e-451f-b1c0-44806d810d9e.jpg"
          }
          onClick={navigateHandler}
          style={{ cursor: "pointer" }}
        />
        <Stack
          position="absolute"
          top={12}
          left={12}
          style={{ backgroundColor: "#ffffffaa" }}
          borderRadius={1}
          paddingX={1}
        >
          Còn 67 ngày
        </Stack>
      </Stack>
      <Stack
        padding={2}
        onClick={() => navigateHandler()}
        style={{ cursor: "pointer" }}
      >
        <Typography fontSize={19} fontWeight={600}>
          {"Ta thêm lòng tiếp sức, để bớt cuộc chia ly 1"}
        </Typography>
        <Typography fontSize={17} marginTop={1}>
          {(
            "“Như chưa hề có cuộc chia ly” tin rằng những khoảnh khắc đầy xúc động khi người thân gặp lại nhau sẽ dung dưỡng lòng trắc ẩn và khơi dậy nhiều giá trị gia đình vốn thường trực trong lòng mỗi người." +
            "“Như chưa hề có cuộc chia ly cũng tin rằng việc tham gia làm thiện nguyện vốn là hành động tốt đẹp thuần khiết. Chỉ một sự tiếp sức nhỏ, nhưng đều đặn, mỗi người đều có thể tiếp sức cùng ekip “Như chưa hề có cuộc chia ly” làm nên các cuộc đoàn tụ mỗi tháng."
          ).slice(0, 100) + "..."}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"} marginTop={1}>
          <Typography>
            Cần{" "}
            <span style={{ fontWeight: "600", color: "#fb8500" }}>
              {currencyFormatter.format(43000000)}
            </span>
          </Typography>
          <Typography fontWeight={600} fontSize={19}>
            66%
          </Typography>
        </Stack>
        <Stack height={8} style={{ backgroundColor: "#ddd" }} borderRadius={2}>
          <Stack
            height={8}
            width={"67%"}
            style={{ backgroundColor: "orange" }}
            borderRadius={2}
          ></Stack>
        </Stack>
        <Typography marginTop={1} textAlign={"end"}>
          Còn{" "}
          <span style={{ fontWeight: "600", color: "#fb8500" }}>
            {currencyFormatter.format(13000000)}
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default EventCard;

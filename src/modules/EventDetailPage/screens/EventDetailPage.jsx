import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import EventDescription from "../components/EventDescription";
import Donations from "../components/Donations";
import EventInfo from "../components/EventInfo";

function EventDetailPage() {
  const event = {
    image:
      "https://static.thiennguyen.app/public/donate-target/photo/2023/3/8/ce83ad23-bc2e-451f-b1c0-44806d810d9e.jpg",
    title: "Ta thêm lòng tiếp sức, để bớt cuộc chia ly 1",
    amountNeeded: 4000000000,
    amountGot: 2340000000,
    address: "",
    dateBegin: "2023-06-01T05:53:56.642Z",
    dateEnd: "2023-12-23T05:53:56.642Z",
    description: `<p>Ta thêm lòng tiếp sức, để bớt cuộc chia ly</p>
      <p>“Như chưa hề có cuộc chia ly” tin rằng những khoảnh khắc đầy xúc động khi người thân gặp lại nhau sẽ dung dưỡng lòng trắc ẩn và khơi dậy nhiều giá trị gia đình vốn thường trực trong lòng mỗi người.</p>
      <p>“Như chưa hề có cuộc chia ly cũng tin rằng việc tham gia làm thiện nguyện vốn là hành động tốt đẹp thuần khiết. Chỉ một sự tiếp sức nhỏ, nhưng đều đặn, mỗi người đều có thể tiếp sức cùng ekip “Như chưa hề có cuộc chia ly” làm nên các cuộc đoàn tụ mỗi tháng.</p>`,
    donorQuantity: 36,
    category: {
      id: 3,
      name: "Tiền",
      unit: "VNĐ",
    },
  };

  const donations = [
    {
      donor: {
        image:
          "https://thiennguyen.app/_next/static/media/logo@2x.82fbd1ac.png",
        name: "Nguyễn Đỗ Nhã Khuyên",
      },
      transfer: {
        amount: 100000,
        time: "30/05/2023 05:02",
      },
    },
    {
      donor: {
        image:
          "https://thiennguyen.app/_next/static/media/logo@2x.82fbd1ac.png",
        name: "Nguyễn Đỗ Nhã Khuyên",
      },
      transfer: {
        amount: 100000,
        time: "30/05/2023 05:02",
      },
    },
    {
      donor: {
        image:
          "https://thiennguyen.app/_next/static/media/logo@2x.82fbd1ac.png",
        name: "Nguyễn Đỗ Nhã Khuyên",
      },
      transfer: {
        amount: 100000,
        time: "30/05/2023 05:02",
      },
    },
  ];

  return (
    <Stack paddingX={3} paddingY={4}>
      <Typography fontSize={28} fontWeight={600}>
        {event.title}
      </Typography>
      <Stack marginTop={3} direction={"row"} spacing={3}>
        <Stack width={"60%"}>
          <EventDescription event={event}/>
          <Donations donations={donations} />
        </Stack>
        <EventInfo event={event} />
      </Stack>
    </Stack>
  );
}

export default EventDetailPage;

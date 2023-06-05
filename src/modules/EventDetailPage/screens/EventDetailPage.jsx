import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventDescription from "../components/EventDescription";
import Donations from "../components/Donations";
import EventInfo from "../components/EventInfo";
import { useParams } from "react-router";
import { EventService } from "../../../services";

function EventDetailPage() {
  const params = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    EventService.getEvent(params.eventId)
      .then((fetchedEvent) => {
        setEvent(fetchedEvent.data);
      })
      .catch((e) => console.log(e));
  }, []);

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
        {event?.title}
      </Typography>
      <Stack marginTop={3} direction={"row"} spacing={3}>
        <Stack width={"60%"}>
          {event && <EventDescription event={event} />}

          <Donations donations={donations} />
        </Stack>
        {event && <EventInfo event={event} />}
      </Stack>
    </Stack>
  );
}

export default EventDetailPage;

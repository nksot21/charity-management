import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventDescription from "../../EventDetailPage/components/EventDescription";
import Donor from "../components/Donor"
import EventInfo from "../components/EventInfo";
import { useParams } from "react-router";
import { EventService } from "../../../services";
import SomethingWentWrong from "../../../globalComponents/NoResult/Error";

import { Container } from "react-bootstrap";
import DistributionTable from "../components/DistributionTable";

function EventDetailPage(props) {
  const params = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    EventService.getEvent(params.id)
      .then((fetchedEvent) => {
        setError(null);
        setEvent(fetchedEvent.data);
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });
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
      {event && (
        <Stack marginTop={3} direction={"row"} spacing={3}>
          <Stack width={"60%"}>
            <EventDescription event={event} />

            <Donor donations={donations} />
            <DistributionTable />
          </Stack>
          <EventInfo event={event} />
        </Stack>
      )}
      {error && <SomethingWentWrong error={error} />}
      
    </Stack>
  );
  
}

export default EventDetailPage;

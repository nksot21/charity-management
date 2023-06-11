import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventDescription from "../components/EventDescription";
import Donations from "../components/Donations";
import EventInfo from "../components/EventInfo";
import { useParams } from "react-router";
import { DonationService, EventService } from "../../../services";
import SomethingWentWrong from "../../../globalComponents/NoResult/Error";
import DistributionTable from "../components/DistributionTable";

function EventDetailPage(props) {
  const params = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = React.useState(null);
  const [donations, setDonations] = useState([]);

  const fetchEvent = async () => {
    await EventService.getEvent(params.eventId)
      .then((fetchedEvent) => {
        setEvent(fetchedEvent.data);
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });
  };

  const fetchDonations = async () => {
    await DonationService.getDonationsByEvent(params.eventId)
      .then((fetchDonations) => {
        setDonations(fetchDonations.data);
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });
  };

  useEffect(() => {
    fetchEvent();
    fetchDonations();
  }, []);

  const afterDonateHandler = () => {
    fetchEvent();
  };

  return (
    <Stack paddingX={3} paddingY={4}>
      <Typography fontSize={28} fontWeight={600}>
        {event?.title}
      </Typography>
      {event && (
        <Stack marginTop={3} direction={"row"} spacing={3}>
          <Stack width={"60%"}>
            <EventDescription event={event} />
            {donations && <Donations donations={donations} />}
            <DistributionTable eventId={params.eventId} />
          </Stack>
          <EventInfo event={event} onAfterDonate={afterDonateHandler} />
        </Stack>
      )}
      {error && <SomethingWentWrong error={error} />}
    </Stack>
  );
}

export default EventDetailPage;

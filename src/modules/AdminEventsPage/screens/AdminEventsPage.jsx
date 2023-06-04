import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventsTable from "../components/EventsTable";
import AddEventPopup from "../components/AddEventPopup";
import { EventService } from "../../../services";

function AdminEventsPage() {
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [events, setEvents] = React.useState(null);

  useEffect(() => {
    EventService.getAllEvents().then((fetchedEvents) => {
      setEvents(fetchedEvents.data);
    });
  }, []);

  return (
    <Stack marginTop={3}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={1}
      >
        <Typography fontSize={24} marginBottom={2}>
          Danh sách sự kiện
        </Typography>
        <Button variant="contained" onClick={() => setIsAddingEvent(true)}>
          Thêm sự kiện
        </Button>
        {isAddingEvent && (
          <AddEventPopup onCloseModal={() => setIsAddingEvent(false)} />
        )}
      </Stack>
      {events && <EventsTable events={events} />}
    </Stack>
  );
}

export default AdminEventsPage;

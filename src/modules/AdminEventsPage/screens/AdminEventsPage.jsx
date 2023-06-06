import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventsTable from "../components/EventsTable";
import AddEventPopup from "../components/AddEventPopup";
import { EventService } from "../../../services";
import SomethingWentWrong from "../../../globalComponents/NoResult/Error";
import { useDispatch, useSelector } from "react-redux";
import { eventsActions, fetchEvents } from "../../../store/events";

function AdminEventsPage() {
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const events = useSelector((state) => state.events.events);
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();

  // const fetchEvents = () => {
  //   EventService.getAllEvents()
  //     .then((fetchedEvents) => {
  //       setError(null);
  //       dispatch(eventsActions.setEvents(fetchedEvents.data));
  //     })
  //     .catch((e) => {
  //       setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
  //     });
  // };

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const closeModalHandler = () => {
    setIsAddingEvent(false);
  };

  return (
    <Stack marginTop={3}>
      {events && (
        <>
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
              <AddEventPopup onCloseModal={closeModalHandler} />
            )}
          </Stack>
          <EventsTable/>
        </>
      )}
      {error && <SomethingWentWrong error={error} />}
    </Stack>
  );
}

export default AdminEventsPage;

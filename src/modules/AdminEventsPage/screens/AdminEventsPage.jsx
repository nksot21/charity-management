import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import EventsTable from "../components/EventsTable";
import AddEventPopup from "../components/AddEventPopup";

function AdminEventsPage() {
  const [isAddingEvent, setIsAddingEvent] = useState(false);
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
      <EventsTable />
    </Stack>
  );
}

export default AdminEventsPage;

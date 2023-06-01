import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import EventsTable from "../components/EventsTable";

function AdminEventsPage() {
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
        <Button variant="contained">Thêm sự kiện</Button>
      </Stack>
      <EventsTable />
    </Stack>
  );
}

export default AdminEventsPage;

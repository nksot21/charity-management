import React from "react";
import { IconButton, Stack } from "@mui/material";
import { Notifications } from "@mui/icons-material";

export default function HeaderNotification() {
  return (
    <Stack>
      <IconButton style={{ color: "black" }}>
        <Notifications />
      </IconButton>
    </Stack>
  );
}

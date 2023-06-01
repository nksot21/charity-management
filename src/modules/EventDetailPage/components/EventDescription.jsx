import React from "react";
import parse from "html-react-parser";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

function EventDescription({ event }) {
  return (
    <>
      <img width={"100%"} src={event.image} />
      <Stack>
        <Typography marginTop={2}>{parse(event.description)}</Typography>
      </Stack>
    </>
  );
}

export default EventDescription;

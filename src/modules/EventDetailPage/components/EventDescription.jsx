import React from "react";
import parse from "html-react-parser";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function EventDescription({ event }) {
  return (
    <>
      <img width={"100%"} src={event.image} />
      <Stack marginTop={3}>
        {/* <div dangerouslySetInnerHTML={{ __html: event.description }} /> */}
        <ReactMarkdown>{ event.description }</ReactMarkdown>
      </Stack>
    </>
  );
}

export default EventDescription;

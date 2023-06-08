import React from "react";
import parse from "html-react-parser";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";

function EventDescription({ event }) {
  const [readMore, setReadMore] = useState(false);
  const [description, setDescription] = useState(
    event.description.slice(0, 300)
  );
  const handleSeeMore = (e) => {
    if (readMore) {
      setDescription(event.description.slice(0, 300));
    } else setDescription(event.description);
    setReadMore(!readMore);
  };

  return (
    <>
      <img width={"100%"} src={event.image} />
      <Stack marginTop={3}>
        {/* <div dangerouslySetInnerHTML={{ __html: event.description }} /> */}
        <ReactMarkdown>{description}</ReactMarkdown>
        <Button
          variant="text"
          style={{ textTransform: "none" }}
          onClick={handleSeeMore}
        >
          {readMore ? "Ẩn bớt" : "Xem thêm"}
        </Button>
      </Stack>
    </>
  );
}

export default EventDescription;

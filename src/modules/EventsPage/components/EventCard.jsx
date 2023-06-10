import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { useNavigate } from "react-router";

function EventCard({ event }) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/su-kien/" + event.id);
  };
  return (
    <Stack
      borderRadius={3}
      overflow="hidden"
      boxShadow="0 0 10px #00000033"
      position={"relative"}
      onClick={navigateHandler}
    >
      <Stack
        height={300}
        position="relative"
        justifyContent={"center"}
        alignItems={"center"}
        overflow={"hidden"}
      >
        <Avatar
          sx={{ height: "100%", width: "100%" }}
          variant="square"
          src={event.image}
          onClick={navigateHandler}
          style={{ cursor: "pointer" }}
        />
        <Stack
          position="absolute"
          top={12}
          left={12}
          style={{ backgroundColor: "#ffffffaa" }}
          borderRadius={1}
          paddingX={1}
        >
          {"Còn " +
            (new Date(event.dateEnd).getTime() -
              new Date(event.dateBegin).getTime()) /
              (1000 * 24 * 60 * 60) +
            " ngày"}
        </Stack>
      </Stack>
      <Stack
        padding={2}
        onClick={() => navigateHandler()}
        style={{ cursor: "pointer" }}
      >
        <Typography fontSize={19} fontWeight={600}>
          {event.title.length > 50
            ? event.title.slice(0, 60) + "..."
            : event.title}
        </Typography>
        <Typography fontSize={17} marginTop={1}>
          {event.description ? event.description.slice(0, 100) + "..." : ""}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"} marginTop={1}>
          <Typography>
            Cần{" "}
            <span style={{ fontWeight: "600", color: "#fb8500" }}>
              {event.category?.name === "Tiền"
                ? currencyFormatter.format(event.amountNeeded)
                : event.amountNeeded + " " + event.category?.unit}
            </span>
          </Typography>
          <Typography fontWeight={600} fontSize={19}>
            {Math.round((event.amountGot / event.amountNeeded) * 100) + "%"}
          </Typography>
        </Stack>
        <Stack height={8} style={{ backgroundColor: "#ddd" }} borderRadius={2}>
          <Stack
            height={8}
            width={event.amountGot / event.amountNeeded}
            style={{ backgroundColor: "orange" }}
            borderRadius={2}
          ></Stack>
        </Stack>
        <Typography marginTop={1} textAlign={"end"}>
          Còn{" "}
          <span style={{ fontWeight: "600", color: "#fb8500" }}>
            {event.category?.name === "Tiền"
              ? currencyFormatter.format(event.amountNeeded - event.amountGot)
              : event.amountNeeded -
                event.amountGot +
                " " +
                event.category?.unit}
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default EventCard;

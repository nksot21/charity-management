import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import heart from "../../../assets/images/heart.png";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { EventService } from "../../../services";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function JoinedEvents({ events, donor }) {
  const [mappedEvents, setMappedEvents] = useState(events);

  const mapEvents = async () => {
    const _mappedEvents = await Promise.all(
      events.map(async (event) => {
        const amount = await EventService.getAmount(event.id, donor.id)
          .then((res) => res.data)
          .catch((e) => {
            throw e;
          });

        console.log(amount);
        return { ...event, amount };
      })
    );

    setMappedEvents(_mappedEvents);
  };

  console.log(mappedEvents);

  useEffect(() => {
    mapEvents();
  }, [events]);

  return (
    <Stack
      marginTop={4}
      boxShadow="0 0 10px #00000022"
      paddingX={2}
      paddingY={3}
      borderRadius={2}
    >
      <Stack>
        <Typography variant="h6" fontSize={26} fontWeight={200}>
          Những sự kiện đã/đang quyên góp:
        </Typography>
        <Typography fontSize={18}>
          Tổng số sự kiện:{" "}
          <span style={{ fontWeight: "bold", color: "#2a9d8f" }}>
            {events.length}
          </span>
        </Typography>
      </Stack>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        marginTop={1}
        padding={2}
      >
        {mappedEvents.map((event) => (
          <Grid item key={event.title} xs={6}>
            <Stack
              borderRadius={3}
              overflow="hidden"
              boxShadow="0 0 10px #00000033"
            >
              <Stack height={200} position="relative">
                <img height="100%" src={event.image} />
                <Stack
                  position="absolute"
                  top={12}
                  left={12}
                  style={{ backgroundColor: "#ffffffdd" }}
                  borderRadius={1}
                  paddingX={1}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <FontAwesomeIcon
                    icon={faCircleDollarToSlot}
                    fontSize={18}
                    color="#f6aa1c"
                  />
                  <Typography color={"#2a9d8f"} fontWeight={600}>
                    {event.category.name === "Tiền"
                      ? currencyFormatter.format(event.amount)
                      : event.amount + " " + event.category.unit}
                  </Typography>
                </Stack>
                <Stack
                  position="absolute"
                  top={40}
                  left={12}
                  style={{ backgroundColor: "#ffffffdd" }}
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
              <Stack padding={2}>
                {" "}
                <Link
                  to={"/events/" + event.id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography fontSize={17}>
                    {event.title.length > 100
                      ? event.title.slice(0, 60) + "..."
                      : event.title}
                  </Typography>
                </Link>
                <Stack
                  height={8}
                  style={{ backgroundColor: "#ddd" }}
                  borderRadius={2}
                  marginTop={1}
                >
                  <Stack
                    height={8}
                    width={(event.amountGot / event.amountNeeded) * 100 + "%"}
                    style={{ backgroundColor: "orange" }}
                    borderRadius={2}
                  ></Stack>
                </Stack>
                <Typography marginTop={1}>
                  Còn{" "}
                  <span style={{ fontWeight: "600", color: "#fb8500" }}>
                    {event.category.name === "Tiền"
                      ? currencyFormatter.format(
                          event.amountNeeded - event.amountGot
                        )
                      : event.amountNeeded -
                        event.amountGot +
                        " " +
                        event.category.unit}
                  </span>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default JoinedEvents;

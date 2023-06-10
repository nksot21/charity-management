import React from "react";
import Modal from "../../../globalComponents/Modal/Modal";
import { Button, Stack, Typography } from "@mui/material";
import heart from "../../../assets/images/heart.png";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { Link } from "react-router-dom";

function EventPopup({ onCloseModal, event }) {
  // Get event from database base on event ID

  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack
        borderRadius={3}
        overflow="hidden"
        boxShadow="0 0 10px #00000033"
        direction={"row"}
        position={"relative"}
      >
        <Stack
          height={300}
          width={300}
          position="relative"
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <img height="100%" src={event.image} />
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
        <Stack padding={2} width={450}>
          <Typography fontSize={19} fontWeight={600}>
            {event.title}
          </Typography>
          <Typography fontSize={17} marginTop={1}>
            {event.description ? event.description.slice(0, 140) + "..." : ""}
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginTop={1}
          >
            <Typography>
              Cần{" "}
              <span style={{ fontWeight: "600", color: "#fb8500" }}>
                {event.category.name === "Tiền"
                  ? currencyFormatter.format(event.amountNeeded)
                  : event.amountNeeded + " " + event.category.unit}
              </span>
            </Typography>
            <Typography fontWeight={600} fontSize={19}>
              {Math.round((event.amountGot / event.amountNeeded) * 100) + "%"}
            </Typography>
          </Stack>
          <Stack
            height={8}
            style={{ backgroundColor: "#ddd" }}
            borderRadius={2}
          >
            <Stack
              height={8}
              width={
                Math.round(event.amountGot / event.amountNeeded) * 100 + "%"
              }
              style={{ backgroundColor: "orange" }}
              borderRadius={2}
            ></Stack>
          </Stack>
          <Typography marginTop={1} textAlign={"end"}>
            Còn{" "}
            <span style={{ fontWeight: "600", color: "#fb8500" }}>
              {event.category.name === "Tiền"
                ? currencyFormatter.format(event.amountNeeded - event.amountGot)
                : event.amountNeeded -
                  event.amountGot +
                  " " +
                  event.category.unit}
            </span>
          </Typography>
          <Button
            variant="contained"
            size="small"
            style={{ position: "absolute", right: "10px", bottom: "10px" }}
          >
            <Link
              to={"/su-kien/" + event.id}
              style={{
                color: "white",
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              Chi tiết sự kiện
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default EventPopup;

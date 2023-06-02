import React from "react";
import { Avatar, Button, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { currencyFormatter } from "../../../utils/currencyFormatter";

function EventInfo({ event }) {
  return (
    <Stack
      width={"40%"}
      padding={3}
      boxShadow={"0 0 10px #00000022"}
      borderRadius={3}
      height={"fit-content"}
      position={"sticky"}
      top={100}
      right={0}
    >
      <Stack
        direction={"row"}
        spacing={2}
        style={{ backgroundColor: "#ffa62933" }}
        borderRadius={"50px"}
        padding={1}
      >
        <Avatar
          alt={event.title}
          src={event.image}
          sx={{ width: 65, height: 65, border: "2px solid orange" }}
        />
        <Stack justifyContent={"center"}>
          <Typography>Tiền ủng hộ sẽ được gửi tới</Typography>
          <Typography fontWeight={600} fontSize={20}>
            aSheep Charity
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} marginTop={2} spacing={1}>
        <Typography fontSize={17}>Còn </Typography>
        <Chip
          size="large"
          style={{fontSize: 17}}
          label={
            (new Date(event.dateEnd) - new Date(event.dateBegin)) /
              (1000 * 60 * 60 * 24) +
            " ngày"
          }
        />
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} marginTop={4}>
        <Typography fontSize={18}>
          Đã quyên góp được{" "}
          <span style={{ fontWeight: "600", color: "#fb8500" }}>
            {currencyFormatter.format(event.amountGot)}
          </span>
        </Typography>
        <Typography fontWeight={600} fontSize={19}>
          {(event.amountGot / event.amountNeeded) * 100 + "%"}
        </Typography>
      </Stack>
      <Stack
        height={12}
        style={{ backgroundColor: "#ddd" }}
        borderRadius={2}
        marginTop={1}
      >
        <Stack
          height={12}
          width={"67%"}
          style={{ backgroundColor: "orange" }}
          borderRadius={2}
        ></Stack>
      </Stack>
      <Typography marginTop={1} textAlign={"end"}>
        Còn{" "}
        <span style={{ fontWeight: "600", color: "#fb8500" }}>
          {currencyFormatter.format(event.amountNeeded - event.amountGot)}
        </span>
      </Typography>
      <Stack marginTop={3} alignItems={"center"} style={{}}>
        <Button
          variant="contained"
          style={{
            borderRadius: "50px",
            padding: "8px 32px",
            fontSize: "17px",
            backgroundImage: "linear-gradient(to right, #298474, #092849)",
          }}
        >
          Quyên góp
        </Button>
      </Stack>
    </Stack>
  );
}

export default EventInfo;

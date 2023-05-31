import React from 'react'
import { Avatar, Button, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { currencyFormatter } from "../../../utils/currencyFormatter";

function EventInfo({event}) {
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
      >
        <Avatar
          alt={event.name}
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
      <Stack direction={"row"} justifyContent={"space-between"} marginTop={4}>
        <Typography fontSize={20}>
          Đã quyên góp được{" "}
          <span style={{ fontWeight: "600", color: "#fb8500" }}>
            {currencyFormatter.format(43000000)}
          </span>
        </Typography>
        <Typography fontWeight={600} fontSize={19}>
          66%
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
          {currencyFormatter.format(13000000)}
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

export default EventInfo
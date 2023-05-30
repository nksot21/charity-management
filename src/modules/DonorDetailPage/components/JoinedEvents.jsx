import {
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import heart from "../../../assets/images/heart.png";
import { currencyFormatter } from "../../../utils/currencyFormatter";

function JoinedEvents({events}) {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" fontSize={26} fontWeight={200} marginTop={4}>
          Những sự kiện đã/đang quyên góp:
        </Typography>
        <Button variant="contained" size="medium">
          Xem tất cả
        </Button>
      </Stack>
      <Grid container columnSpacing={2} rowSpacing={2} marginTop={1}>
        {events.map((event) => (
          <Grid item key={event.name} xs={4}>
            <Stack
              borderRadius={3}
              overflow="hidden"
              boxShadow="0 0 10px #00000033"
            >
              <Stack height={200} position="relative">
                <img height="100%" src={event.image} />
                <Stack
                  position="absolute"
                  top={6}
                  left={6}
                  style={{ backgroundColor: "#ffffffaa" }}
                  borderRadius={1}
                  paddingX={1}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <img height={18} width={18} src={heart}></img>
                  <Typography>{currencyFormatter.format(200000)}</Typography>
                </Stack>
                <Stack
                  position="absolute"
                  top={34}
                  left={6}
                  style={{ backgroundColor: "#ffffffaa" }}
                  borderRadius={1}
                  paddingX={1}
                >
                  Còn 67 ngày
                </Stack>
              </Stack>
              <Stack padding={1}>
                <Typography fontSize={17}>{event.name}</Typography>
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
                    {currencyFormatter.format(
                      event.amountNeeded - event.amountGot
                    )}
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

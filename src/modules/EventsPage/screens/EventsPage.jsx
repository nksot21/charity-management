import * as React from "react";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DonorCard from "../../LandingPage/components/DonorCard";
import EventCard from "../components/EventCard";

function EventsPage() {
  const [count, setCount] = React.useState(9);
  const [search, setSearch] = React.useState("");
  const [events, setEvents] = React.useState(eventsSample);

  const seeMoreHandler = () => {
    setCount((prev) => prev + 9);
  };
  const searchHandler = () => {};
  return (
    <Container>
      <Typography marginTop={8} textAlign="center" variant="h3">
        Những chiến dịch nhận được nhiều sự quan tâm
      </Typography>
      <Stack
        marginTop={8}
        padding={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        borderRadius={2}
        style={{
          boxShadow: "0 0 10px #00000033",
        }}
      >
        <Stack style={{ flexGrow: 1 }}>
          <TextField
            placeholder="Tìm theo tên chiến dịch ..."
            size="small"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          ></TextField>
        </Stack>
        <Button
          style={{
            color: "white",
            backgroundColor: "orange",
            padding: "8px 16px",
          }}
          size="small"
          onClick={searchHandler}
        >
          Tìm kiếm
        </Button>
      </Stack>
      <Stack marginTop={6}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {events.slice(0, count).map((event) => (
            <Grid item xs={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
        <Stack alignItems="center" marginTop={3}>
          <Button
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "8px 32px",
            }}
            size="large"
            onClick={seeMoreHandler}
          >
            Xem thêm
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

function createEvent(image, name, amountNeeded, amountGot) {
  const id = Math.round(Math.random() * 1000);
  return { id, image, name, amountNeeded, amountGot };
}

const eventsSample = [
  createEvent(
    "https://static.thiennguyen.app/public/donate-target/photo/2023/3/8/ce83ad23-bc2e-451f-b1c0-44806d810d9e.jpg",
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly 1",
    4000000000,
    2340000000
  ),
  createEvent(
    "https://static.thiennguyen.app/public/donate-target/photo/2023/3/8/ce83ad23-bc2e-451f-b1c0-44806d810d9e.jpg",
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly 2",
    4500000000,
    1340000000
  ),
  createEvent(
    "https://static.thiennguyen.app/public/donate-target/photo/2023/3/8/ce83ad23-bc2e-451f-b1c0-44806d810d9e.jpg",
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly 2",
    5000000000,
    2340000000
  ),
  createEvent(
    "https://static.thiennguyen.app/public/donate-target/photo/2023/3/8/ce83ad23-bc2e-451f-b1c0-44806d810d9e.jpg",
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly 4",
    4000000000,
    340000000
  ),
];

export default EventsPage;

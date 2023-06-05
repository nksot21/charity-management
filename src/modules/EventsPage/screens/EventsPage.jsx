import * as React from "react";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EventCard from "../components/EventCard";
import NoResult from "../../../globalComponents/NoResult/NoResult";
import { EventService } from "../../../services";
import SomethingWentWrong from "../../../globalComponents/NoResult/Error";

function EventsPage() {
  const [count, setCount] = React.useState(9);
  const [search, setSearch] = React.useState("");
  const [events, setEvents] = React.useState([]);
  const [viewedEvents, setViewedEvents] = React.useState(events);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    EventService.getAllEvents()
      .then((fetchedEvents) => {
        setError(null);
        setEvents(fetchedEvents.data);
        setViewedEvents(fetchedEvents.data);
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });
  }, []);

  const seeMoreHandler = () => {
    setCount((prev) => prev + 9);
  };

  const searchHandler = () => {
    setViewedEvents(
      events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  
  return (
    <Container>
      <Typography marginTop={8} textAlign="center" variant="h4">
        Những chiến dịch nhận được nhiều sự quan tâm
      </Typography>
      <Stack
        marginTop={4}
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
      {viewedEvents.length > 0 && (
        <>
          <Stack Stack marginTop={6}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={3}
              alignItems={"normal"}
            >
              {viewedEvents.slice(0, count).map((event) => (
                <Grid item xs={4} key={event.id}>
                  <EventCard event={event} />
                </Grid>
              ))}
            </Grid>
            {(Math.floor(events.length / 9) + 1) * 9 - count > 0 && (
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
            )}
          </Stack>
        </>
      )}
      {viewedEvents.length === 0 && !error && <NoResult />}
      {error && <SomethingWentWrong error={error} />}
    </Container>
  );
}

function createEvent(image, title, amountNeeded, amountGot) {
  const id = Math.round(Math.random() * 1000);
  return { id, image, title, amountNeeded, amountGot };
}

export default EventsPage;

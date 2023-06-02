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

function DonorsPage() {
  const [count, setCount] = React.useState(9);
  const [search, setSearch] = React.useState("");
  const [viewedDonors, setViewedDonors] = React.useState(userArray);
  const seeMoreHandler = () => {
    setCount((prev) => prev + 9);
  };
  const searchHandler = () => {
    setViewedDonors(
      userArray.filter(
        (donor) =>
          donor.name.toLowerCase().includes(search) ||
          donor.username.toLowerCase().includes(search) ||
          donor.id.toString().toLowerCase().includes(search)
      )
    );
  };
  return (
    <Container>
      <Typography marginTop={8} textAlign="center" variant="h3">
        Những nhà hảo tâm giàu lòng nhân ái
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
            placeholder="Tìm theo tên, tên người dùng hoặc id"
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
          {viewedDonors.slice(0, count).map((user) => (
            <Grid item xs={4}>
              <DonorCard
                id={user.id}
                name={user.name}
                username={user.username}
                date={user.date}
              />
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

const userArray = [
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Nguyễn Thị Mỹ Châu",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Kim Jisoo",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Lê Văn Thiện",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
  {
    id: "00723",
    name: "Jennie Kim",
    username: "@JennieRubyJane",
    date: "07/2022",
  },
];

export default DonorsPage;

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
import NoResult from "../../../globalComponents/NoResult/NoResult";
import { DonorService } from "../../../services";

function DonorsPage() {
  const [count, setCount] = React.useState(9);
  const [search, setSearch] = React.useState("");
  const [donors, setDonors] = React.useState([]);
  const [viewedDonors, setViewedDonors] = React.useState([]);
  const seeMoreHandler = () => {
    setCount((prev) => prev + 9);
  };

  React.useEffect(() => {
    DonorService.getAllDonors().then((fetchedDonors) => {
      setDonors(fetchedDonors.data);
      setViewedDonors(fetchedDonors.data);
    });
  }, []);

  const searchHandler = () => {
    setViewedDonors(
      donors.filter(
        (donor) =>
          donor.name.toLowerCase().includes(search) ||
          donor.username.toLowerCase().includes(search) ||
          donor.id.toString().toLowerCase().includes(search)
      )
    );
  };
  return (
    <Container>
      <Typography marginTop={8} textAlign="center" variant="h4">
        Những nhà hảo tâm giàu lòng nhân ái
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
      {viewedDonors.length > 0 && (
        <>
          <Stack marginTop={6}>
            <Grid container rowSpacing={3} columnSpacing={3}>
              {viewedDonors.slice(0, count).map((donor) => (
                <Grid item xs={4}>
                  <DonorCard donor={donor} />
                </Grid>
              ))}
            </Grid>
            {(Math.floor(donors.length / 9) + 1) * 9 - count > 0 && (
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
      {viewedDonors.length === 0 && <NoResult />}
    </Container>
  );
}

// const donorsSample = [
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Nguyễn Thị Mỹ Châu",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Kim Jisoo",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Lê Văn Thiện",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
//   {
//     id: "00723",
//     name: "Jennie Kim",
//     username: "@JennieRubyJane",
//     date: "07/2022",
//   },
// ];

export default DonorsPage;

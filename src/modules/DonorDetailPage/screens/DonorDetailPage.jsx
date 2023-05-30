import { Stack } from "@mui/material";
import React from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import DonorInfo from "../components/DonorInfo";
import Statistics from "../components/Statistics";
import JoinedEvents from "../components/JoinedEvents";
import Transfers from "../components/Transfers";

function createData(time, bank, donor, content, amount) {
  return { time, bank, donor, content, amount };
}

const rowsData = [
  createData(
    "30/05/2023 05:02",
    "ACB",
    "NGUYEN THI MY TRINH",
    "Chuyen khoan den quy ho tro tre em huyen Nghi Son, Tam Chuc 1",
    currencyFormatter.format(100000)
  ),
  createData(
    "30/05/2023 05:02",
    "ACB",
    "NGUYEN THI MY TRINH",
    "Chuyen khoan den quy ho tro tre em huyen Nghi Son, Tam Chuc 2",
    currencyFormatter.format(100000)
  ),
  createData(
    "30/05/2023 05:02",
    "ACB",
    "NGUYEN THI MY TRINH",
    "Chuyen khoan den quy ho tro tre em huyen Nghi Son, Tam Chuc 5",
    currencyFormatter.format(100000)
  ),
  createData(
    "30/05/2023 05:02",
    "ACB",
    "NGUYEN THI MY TRINH",
    "Chuyen khoan den quy ho tro tre em huyen Nghi Son, Tam Chuc 3",
    currencyFormatter.format(100000)
  ),
  createData(
    "30/05/2023 05:02",
    "ACB",
    "NGUYEN THI MY TRINH",
    "Chuyen khoan den quy ho tro tre em huyen Nghi Son, Tam Chuc 4",
    currencyFormatter.format(100000)
  ),
];

function createEvent(image, name, amountNeeded, amountGot) {
  return { image, name, amountNeeded, amountGot };
}

const joinedEvents = [
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
  createEvent(
    "https://static.thiennguyen.app/public/donate-target/photo/2023/3/8/ce83ad23-bc2e-451f-b1c0-44806d810d9e.jpg",
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly 5",
    4300000000,
    2340000000
  ),
];

function DonorDetailPage() {
  return (
    <Stack paddingX={6} paddingY={7} spacing={5} direction="row">
      <Stack paddingX={2} paddingY={3} width={"40%"}>
        <DonorInfo />
      </Stack>
      <Stack paddingX={2} paddingY={3} width={"60%"}>
        <Statistics />
        <JoinedEvents events={joinedEvents} />
        <Transfers transfers={rowsData} />
      </Stack>
    </Stack>
  );
}

export default DonorDetailPage;

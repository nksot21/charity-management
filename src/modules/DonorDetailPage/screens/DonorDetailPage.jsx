import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import DonorInfo from "../components/DonorInfo";
import Statistics from "../components/Statistics";
import JoinedEvents from "../components/JoinedEvents";
import Transfers from "../components/Transfers";
import { useParams } from "react-router-dom";
import { DonorService } from "../../../services";

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
];

function DonorDetailPage() {
  const params = useParams();
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    DonorService.getDonor(params.donorId)
      .then((fetchedDonor) => {
        setDonor(fetchedDonor.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Stack paddingX={1} paddingY={7} spacing={2} direction="row">
      <Stack paddingX={2} paddingY={3} width={"38%"}>
        {donor && <DonorInfo donor={donor} />}
      </Stack>
      <Stack paddingX={2} paddingY={3} width={"62%"}>
        {donor && <Statistics donor={donor} />}
        <JoinedEvents events={joinedEvents} />
        <Transfers transfers={rowsData} />
      </Stack>
    </Stack>
  );
}

export default DonorDetailPage;

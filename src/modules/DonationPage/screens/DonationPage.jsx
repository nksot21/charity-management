import { Stack } from "@mui/material";
import React from "react";
import DonationItem from "../components/DonationItem";
import DonationFilter from "../components/DonationFilter";

function DonationPage() {
  return (
    <Stack paddingY={4} paddingX={3}>
      <DonationFilter />
      <Stack marginTop={2} spacing={2}>
        {donations.map((donation) => (
          <DonationItem donation={donation} key={Math.round()} />
        ))}
      </Stack>
    </Stack>
  );
}

const donations = [
  {
    donor: {
      id: 287,
      name: "Lê Văn Thiện",
      username: "@thienlv1812",
      image:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/3/5/1154465/Jisoo-1K.jpg",
    },
    event: {
      id: 232,
      name: "Ủng hộ trẻ em vùng lũ lụt miền Trung",
      image:
        "https://static.thiennguyen.app/public/donate-target/photo/2023/5/26/66e9c123-cc1b-4f9d-9f02-ccfeb23c9324.jpg",
    },
    transfer: {
      id: 234,
      amount: 102000,
      time: "2023-05-30T17:09:42.411",
    },
  },
  {
    donor: {
      id: 928,
      name: "Nguyễn Văn Nam",
      username: "@thienlv1812",
      image:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/3/5/1154465/Jisoo-1K.jpg",
    },
    event: {
      id: 232,
      name: "Ủng hộ trẻ em vùng lũ lụt miền Trung",
      image:
        "https://static.thiennguyen.app/public/donate-target/photo/2023/5/26/66e9c123-cc1b-4f9d-9f02-ccfeb23c9324.jpg",
    },
    transfer: {
      id: 234,
      amount: 102000,
      time: "2023-06-23T17:09:42.411",
    },
  },
];

export default DonationPage;

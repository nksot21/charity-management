import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonationItem from "../components/DonationItem";
import DonationFilter from "../components/DonationFilter";
import { DonationService } from "../../../services";
import { useLocation } from "react-router-dom";

function DonationPage() {
  const [donations, setDonations] = useState([]);
  const [viewedDonations, setViewedDonations] = useState([]);
  const location = useLocation();
  let username = location.state?.username;

  const fetchDonations = async () => {
    await DonationService.getAllDonation()
      .then((res) => {
        console.log(res.data);
        setDonations(res.data);
        setViewedDonations(res.data);
      })
      .catch((e) => {
        throw e;
      });
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  useEffect(() => {
    if (username) {
      setViewedDonations(
        donations.filter((donation) =>
          donation.donor.username.includes(username)
        )
      );
    }
  });

  const searchHandler = (searchDonor, searchEvent) => {
    if (searchDonor.length > 0 && searchEvent.length > 0) {
      return setViewedDonations(
        donations.filter(
          (donation) =>
            (donation.donor.name.toLowerCase().includes(searchDonor) ||
              donation.donor.username.toLowerCase().includes(searchDonor)) &&
            donation.event.title.toLowerCase().includes(searchEvent)
        )
      );
    }
    if (searchDonor.length > 0) {
      return setViewedDonations(
        donations.filter(
          (donation) =>
            donation.donor.name.toLowerCase().includes(searchDonor) ||
            donation.donor.username.toLowerCase().includes(searchDonor)
        )
      );
    }
    if (searchEvent.length > 0) {
      return setViewedDonations(
        donations.filter((donation) =>
          donation.event.title.toLowerCase().includes(searchEvent)
        )
      );
    }
  };

  return (
    <Stack paddingY={4} paddingX={3}>
      {viewedDonations.length > 0 && (
        <>
          <DonationFilter onSearch={searchHandler} />
          <Stack marginTop={2} spacing={2}>
            {viewedDonations.map((donation) => (
              <DonationItem donation={donation} key={Math.round()} />
            ))}
            {viewedDonations.length === 0 && (
              <Typography marginTop={3} fontSize={18} textAlign={"center"}>
                Không có kết quả để hiển thị
              </Typography>
            )}
          </Stack>
        </>
      )}
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
      title: "Ủng hộ trẻ em vùng lũ lụt miền Trung",
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
      title: "Ủng hộ trẻ em vùng lũ lụt miền Trung",
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

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
    if (searchDonor.length === 0 && searchEvent.length === 0) {
      setViewedDonations(donations);
      return;
    }
    let _viewedDonation = viewedDonations;
    if (searchDonor.length > 0) {
      _viewedDonation = donations.filter(
        (donation) =>
          donation.donor.name.toLowerCase().includes(searchDonor) ||
          donation.donor.username.toLowerCase().includes(searchDonor)
      );
    }
    if (searchEvent.length > 0) {
      _viewedDonation = donations.filter((donation) =>
        donation.event.title.toLowerCase().includes(searchEvent)
      );
    }

    setViewedDonations(_viewedDonation);
  };

  return (
    <Stack paddingY={4} paddingX={3}>
      <DonationFilter onSearch={searchHandler} />
      {viewedDonations.length > 0 && (
        <>
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

export default DonationPage;

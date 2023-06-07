import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import DonorInfo from "../components/DonorInfo";
import Statistics from "../components/Statistics";
import JoinedEvents from "../components/JoinedEvents";
import Transfers from "../components/Transfers";
import { useNavigate, useParams } from "react-router-dom";
import { DonationService, DonorService } from "../../../services";
import SomethingWentWrong from "../../../globalComponents/NoResult/Error";
import { useSelector } from "react-redux";
import Items from "../components/Item";

function DonorDetailPage() {
  const params = useParams();
  const [donor, setDonor] = useState(null);
  const [error, setError] = useState(null);
  const [donations, setDonations] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const loggedInDonor = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const donorId = params.donorId || loggedInDonor.id;

  if (params.donorId && loggedInDonor) {
    if (loggedInDonor.id === parseInt(params.donorId)) {
      navigate("/donors/profile");
    }
  }

  if (!params.donorId && !loggedInDonor) {
    navigate("/trang-chu");
  }

  const fetchDonor = async () => {
    if (params.donorId) {
      await DonorService.getDonor(donorId)
        .then((fetchedDonor) => {
          setDonor(fetchedDonor.data);
        })
        .catch((e) => {
          setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
        });
    } else {
      setDonor(loggedInDonor);
    }
  };

  const fetchJoinedEvents = async () => {
    await DonorService.getJoinedEvents(donorId)
      .then((fetchEvents) => {
        setJoinedEvents(fetchEvents.data);
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });
  };

  const fetchDonations = async () => {
    await DonationService.getDonationsByDonor(donorId)
      .then((fetchDonations) => {
        setDonations(fetchDonations.data);
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });
  };

  useEffect(() => {
    fetchDonor();
    fetchDonations();
    fetchJoinedEvents();
  }, [params]);

  return (
    <>
      {donor && (
        <Stack paddingX={1} paddingY={7} spacing={2} direction="row">
          <Stack paddingX={2} paddingY={3} width={"38%"}>
            {donor && <DonorInfo donor={donor} />}
          </Stack>
          <Stack paddingX={2} paddingY={3} width={"62%"}>
            {donor && <Statistics donor={donor} />}
            {joinedEvents && <JoinedEvents events={joinedEvents} />}
            {donations && <Transfers donations={donations} />}
            {donations && <Items donations={donations} />}
          </Stack>
        </Stack>
      )}
      {error && <SomethingWentWrong error={error} />}
    </>
  );
}

export default DonorDetailPage;

import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DonorsTable from "../components/DonorsTable";
import { DonorService } from "../../../services";
import SomethingWentWrong from "../../../globalComponents/NoResult/Error";

function AdminDonorsPage() {
  const [donors, setDonors] = React.useState(null);
  const [error, setError] = React.useState(null);

  const fetchDonors = async () => {
    const fetchedDonors = await DonorService.getAllDonors()
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });

    const mappedDonors = await Promise.all(
      fetchedDonors.map(async (donor) => {
        const joinedEvents = await DonorService.getJoinedEvents(donor.id)
          .then((res) => res.data)
          .catch((e) => {
            throw e;
          });
        return { ...donor, eventsQuantity: joinedEvents.length };
      })
    );

    setDonors(mappedDonors);
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <Stack marginTop={3}>
      {donors && (
        <>
          <Stack>
            <Typography fontSize={24} marginBottom={2}>
              Danh sách nhà hảo tâm
            </Typography>
          </Stack>
          <DonorsTable donors={donors} />
        </>
      )}
      {error && <SomethingWentWrong error={error} />}
    </Stack>
  );
}

export default AdminDonorsPage;

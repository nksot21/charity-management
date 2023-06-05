import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DonorsTable from "../components/DonorsTable";
import { DonorService } from "../../../services";
import SomethingWentWrong from "../../../globalComponents/NoResult/Error";

function AdminDonorsPage() {
  const [donors, setDonors] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    DonorService.getAllDonors()
      .then((fetchedDonors) => {
        setError(null);
        setDonors(fetchedDonors.data);
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });
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

import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DonorsTable from "../components/DonorsTable";
import { DonorService } from "../../../services";

function AdminDonorsPage() {
  const [donors, setDonors] = React.useState(null);

  useEffect(() => {
    DonorService.getAllDonors().then((fetchedDonors) => {
      setDonors(fetchedDonors.data);
    });
  }, []);

  return (
    <Stack marginTop={3}>
      <Stack>
        <Typography fontSize={24} marginBottom={2}>
          Danh sách nhà hảo tâm
        </Typography>
      </Stack>
      {donors && <DonorsTable donors={donors} />}
    </Stack>
  );
}

export default AdminDonorsPage;

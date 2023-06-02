import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import DonorsTable from "../components/DonorsTable";

function AdminDonorsPage() {
  return (
    <Stack marginTop={3}>
      <Stack>
        <Typography fontSize={24} marginBottom={2}>
          Danh sách nhà hảo tâm
        </Typography>
      </Stack>
      <DonorsTable />
    </Stack>
  );
}

export default AdminDonorsPage;

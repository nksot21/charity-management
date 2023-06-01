import { Button, FormControl, Stack, TextField } from "@mui/material";
import React from "react";

function DonationFilter() {
  return (
    <Stack direction={"row"} spacing={2} justifyContent={"end"}>
      <TextField size="small" placeholder="Tìm kiếm theo nhà hảo tâm" />
      <TextField size="small" placeholder="Tìm kiếm theo sự kiện" />
      <Button size="small" variant="contained">Tìm kiếm</Button>
    </Stack>
  );
}

export default DonationFilter;

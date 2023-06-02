import { Button, FormControl, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function DonationFilter({ onSearch }) {
  const [searchDonor, setSearchDonor] = useState("");
  const [searchEvent, setSearchEvent] = useState("");

  const searchHandler = () => {
    onSearch(searchDonor, searchEvent);
  };

  return (
    <Stack direction={"row"} spacing={2} justifyContent={"end"}>
      <TextField
        size="small"
        placeholder="Tìm kiếm theo nhà hảo tâm"
        value={searchDonor}
        onChange={(event) => setSearchDonor(event.target.value)}
      />
      <TextField
        size="small"
        placeholder="Tìm kiếm theo sự kiện"
        value={searchEvent}
        onChange={(event) => setSearchEvent(event.target.value)}
      />
      <Button size="small" variant="contained" onClick={searchHandler}>
        Tìm kiếm
      </Button>
    </Stack>
  );
}

export default DonationFilter;

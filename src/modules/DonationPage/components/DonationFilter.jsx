import { Button, FormControl, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function DonationFilter({ onSearch }) {
  const [searchDonor, setSearchDonor] = useState("");
  const [searchEvent, setSearchEvent] = useState("");

  const searchDonorHandler = (event) => {
    setSearchDonor(event.target.value);
    onSearch(event.target.value, "");
  };

  const searchEventHandler = (event) => {
    setSearchEvent(event.target.value);
    onSearch("", event.target.value);
  };

  return (
    <Stack direction={"row"} spacing={2} justifyContent={"end"}>
      <TextField
        size="small"
        placeholder="Tìm kiếm theo nhà hảo tâm"
        value={searchDonor}
        onChange={searchDonorHandler}
      />
      <TextField
        size="small"
        placeholder="Tìm kiếm theo sự kiện"
        value={searchEvent}
        onChange={searchEventHandler}
      />
    </Stack>
  );
}

export default DonationFilter;

import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Button, IconButton, Stack, Typography } from "@mui/material";

export default function DistributionTable() {
  // Donations List
  const [distributionSeeMore, setDistributionMore] = useState(false);
  const handleDistributionSeeMore = (e) => {
    setDistributionMore(!distributionSeeMore);
  };
  return (
    <Stack marginTop={5}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontSize={20} fontWeight={600}>
          Danh sách phân phối
        </Typography>
        <IconButton onClick={handleDistributionSeeMore}>
          {!distributionSeeMore ? (
            <KeyboardArrowDownOutlinedIcon />
          ) : (
            <KeyboardArrowUpOutlinedIcon />
          )}
        </IconButton>
      </div>
    </Stack>
  );
}

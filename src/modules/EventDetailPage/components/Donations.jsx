import React, { useState } from "react";
import { Avatar, Button, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { format } from "date-fns";

function Donations({ donations }) {
  const [count, setCount] = useState(10);
  const [donationSeeMore, setDonationMore] = useState(true);

  const handleDonationSeeMore = (e) => {
    setDonationMore(!donationSeeMore);
  };

  const seeMoreHandler = () => {
    if (count < donations.length) setCount((prev) => prev + 10);
  };

  return (
    <Stack marginTop={3}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography fontSize={20} fontWeight={600}>
          Danh sách ủng hộ
        </Typography>
        <IconButton onClick={handleDonationSeeMore}>
          {!donationSeeMore ? (
            <KeyboardArrowDownOutlinedIcon />
          ) : (
            <KeyboardArrowUpOutlinedIcon />
          )}
        </IconButton>
      </Stack>
      <Stack spacing={1} marginTop={2}>
        {donations.slice(0, count).map((donation) => (
          <Stack
            direction={"row"}
            spacing={2}
            border={"1px solid orange"}
            borderRadius={"50px"}
            key={Math.random()}
            paddingRight={4}
          >
            <Avatar
              alt={donation.donor.name}
              src={donation.donor.photo}
              sx={{ width: 65, height: 65, border: "1px solid orange" }}
            />
            <Stack justifyContent={"center"} flexGrow={1}>
              <Typography fontSize={14}>{donation.donor.name}</Typography>
              <Typography fontWeight={600} fontSize={18}>
                {donation.transfer
                  ? currencyFormatter.format(donation.transfer.amount)
                  : donation.item.amount +
                    " " +
                    donation.event.category.unit +
                    " " +
                    donation.event.category.name}
              </Typography>
            </Stack>
            <Stack justifyContent={"center"}>
              <Typography fontSize={14}>
                {format(
                  new Date(
                    donation.transfer
                      ? donation.transfer.time
                      : donation.item.time
                  ),
                  "dd/MM/yyyy hh:mm:ss"
                )}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
      {(Math.floor(donations.length / 10) + 1) * 10 - count > 0 && (
        <Stack marginTop={1} alignItems={"center"}>
          <Button
            variant="text"
            style={{ textTransform: "none" }}
            onClick={seeMoreHandler}
          >
            Xem thêm
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export default Donations;

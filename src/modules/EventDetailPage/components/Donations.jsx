import React, { useState } from "react";
import { Avatar, Button, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { currencyFormatter } from "../../../utils/currencyFormatter";

function Donations({ donations }) {
  const [count, setCount] = useState(10);

  const seeMoreHandler = () => {
    if (count < donations.length) setCount((prev) => prev + 10);
  };
  return (
    <Stack marginTop={3}>
      <Typography fontSize={20} fontWeight={600}>
        Danh sách ủng hộ
      </Typography>
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
              src={donation.donor.image}
              sx={{ width: 65, height: 65, border: "1px solid orange" }}
            />
            <Stack justifyContent={"center"} flexGrow={1}>
              <Typography fontSize={14}>{donation.donor.name}</Typography>
              <Typography fontWeight={600} fontSize={18}>
                {currencyFormatter.format(donation.transfer.amount)}
              </Typography>
            </Stack>
            <Stack justifyContent={"center"}>
              <Typography fontSize={14}>{donation.transfer.time}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack marginTop={1} alignItems={"center"}>
        <Button
          variant="text"
          style={{ textTransform: "none" }}
          onClick={seeMoreHandler}
        >
          Xem thêm
        </Button>
      </Stack>
    </Stack>
  );
}

export default Donations;
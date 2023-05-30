import { Circle, MoreHoriz } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import format from "date-fns/format";
import styles from "./DonationItem.module.css";

function DonationItem({ donation }) {
  return (
    <Stack
      direction="row"
      borderRadius={10}
      border="2px solid #e3deca"
      style={{ backgroundColor: "#f2f1eb" }}
      spacing={1}
      justifyContent={"space-between"}
      overflow={"hidden"}
      onClick={() => console.log(100)}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems={"center"}
        position={"relative"}
        className={styles.hover}
        padding={1}
        paddingRight={2}
      >
        <Stack
          height={60}
          width={60}
          justifyContent="center"
          borderRadius="200px"
          overflow="hidden"
          style={{ boxShadow: "0 0 10px #00000022" }}
          flexShrink={0}
          border={"2px solid #ddd"}
        >
          <img height="100%" width="100%" src={donation.donor.image}></img>
        </Stack>
        <Stack>
          <Typography fontSize={18} fontWeight={"bold"}>
            {donation.donor.name}
          </Typography>
          <Typography>{donation.donor.username}</Typography>
        </Stack>
        {/* <Stack position={"absolute"} right={"-30px"} top={"-15px"}>
          <IconButton style={{ backgroundColor: "#298483", padding: 0 }}>
            <MoreHoriz
              fontSize="10px"
              style={{ color: "white", transform: "scale(0.7)" }}
            />
          </IconButton>
        </Stack> */}
      </Stack>
      <Circle fontSize="10" style={{ color: "#aaa", alignSelf: "center" }} />
      <Stack
        padding={1}
        className={styles.hover}
        paddingX={3}
        justifyContent={"center"}
      >
        <Typography>
          Đã quyên góp{" "}
          <span style={{ fontWeight: "bold", color: "#2AC48A" }}>
            {currencyFormatter.format(donation.transfer.amount)}
          </span>{" "}
          vào lúc{" "}
          <span style={{ fontWeight: "bold", color: "#2AC48A" }}>
            {format(new Date(donation.transfer.time), "hh:mm:ss dd-MM-yyyy")}
          </span>{" "}
          đến sự kiện
        </Typography>
      </Stack>
      <Circle fontSize="10" style={{ color: "#aaa", alignSelf: "center" }} />
      <Stack
        direction="row"
        justifyContent={"end"}
        alignItems={"center"}
        spacing={2}
        maxWidth={"30%"}
        padding={1}
        className={styles.hover}
      >
        <Stack>
          <Typography>{donation.event.name}</Typography>
        </Stack>
        <Stack
          height={60}
          width={60}
          justifyContent="center"
          borderRadius="200px"
          overflow="hidden"
          style={{ boxShadow: "0 0 10px #00000022" }}
          flexShrink={0}
          border={"2px solid #ddd"}
        >
          <img height="100%" width="100%" src={donation.event.image}></img>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DonationItem;

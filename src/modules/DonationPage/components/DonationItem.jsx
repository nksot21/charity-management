import { Circle, MoreHoriz, LineAxisOutlined } from "@mui/icons-material";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import format from "date-fns/format";
import styles from "./DonationItem.module.css";
import DonorPopup from "./DonorPopup";
import EventPopup from "./EventPopup";
import TransferPopup from "./TransferPopup";

function DonationItem({ donation }) {
  const [isOpenDonorPopup, setIsOpenDonorPopup] = useState(false);
  const [isOpenEventPopup, setIsOpenEventPopup] = useState(false);
  const [isOpenTransferPopup, setIsOpenTransferPopup] = useState(false);

  return (
    <Stack
      direction="row"
      borderRadius={5}
      border="2px solid #f1f1f3"
      style={{ backgroundColor: "white" }}
      spacing={1}
      justifyContent={"space-between"}
      overflow={"hidden"}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems={"center"}
        position={"relative"}
        className={styles.hover}
        padding={1}
        paddingRight={2}
        onClick={() => setIsOpenDonorPopup(true)}
      >
        <Avatar sx={{ width: 60, height: 60 }} src={donation.donor.photo} />
        <Stack>
          <Typography fontSize={15} fontWeight={"bold"} whiteSpace={"nowrap"}>
            {donation.donor.name}
          </Typography>
          <Typography  fontSize={14}>{donation.donor.username}</Typography>
        </Stack>
      </Stack>
      <Circle fontSize="10" style={{ color: "#aaa", alignSelf: "center" }} />
      <Stack
        padding={1}
        className={styles.hover}
        paddingX={2}
        justifyContent={"center"}
        onClick={() => setIsOpenTransferPopup(true)}
      >
        {donation.transfer && (
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
        )}
        {donation.item && (
          <Typography>
            Đã quyên góp{" "}
            <span style={{ fontWeight: "bold", color: "#2AC48A" }}>
              {donation.item.amount +
                " " +
                donation.event.category.unit +
                " " +
                donation.event.category.name}
            </span>{" "}
            vào lúc{" "}
            <span style={{ fontWeight: "bold", color: "#2AC48A" }}>
              {format(new Date(donation.item.time), "hh:mm:ss dd-MM-yyyy")}
            </span>{" "}
            đến sự kiện
          </Typography>
        )}
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
        onClick={() => setIsOpenEventPopup(true)}
      >
        <Stack>
          <Typography fontSize={14} textAlign={"end"}>Sự kiện</Typography>
          <Typography fontSize={15} textAlign={"end"} fontWeight={"bold"}>
            {donation.event.title.length > 40
              ? donation.event.title.slice(0, 40) + "..."
              : donation.event.title}
          </Typography>
        </Stack>
        <Avatar sx={{ width: 40, height: 40 }} src={donation.event.image} />
      </Stack>
      {isOpenDonorPopup && (
        <DonorPopup
          onCloseModal={() => setIsOpenDonorPopup(false)}
          onDonation={true}
          donor={donation.donor}
        />
      )}
      {isOpenEventPopup && (
        <EventPopup
          onCloseModal={() => setIsOpenEventPopup(false)}
          event={donation.event}
        />
      )}
      {isOpenTransferPopup && (
        <TransferPopup
          onCloseModal={() => setIsOpenTransferPopup(false)}
          transfer={donation.transfer}
          item={donation.item}
        />
      )}
    </Stack>
  );
}

export default DonationItem;

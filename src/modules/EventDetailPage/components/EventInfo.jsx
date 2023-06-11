import React, { useState } from "react";
import { Avatar, Button, Chip, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DistributionPopup from "../../AdminEventsPage/components/DistributionPopup";
import AddDonationPopup from "../../AdminEventsPage/components/AddDonationPopup";
import DonationInfoPopup from "./DonationInfoPopup";

function EventInfo({ event, onAfterDonate }) {
  const { user, role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const [openAddDistribution, setOpenAddDistribution] = useState(false);
  const [openAddDonation, setOpenAddDonation] = useState(false);
  const [isAddingDonation, setIsAddingDonation] = useState(false);

  const handleOpenDistribution = () => {
    setOpenAddDistribution(true);
  };

  const donateHandler = () => {
    if (role === "GUESS") {
      navigate("/dang-ky");
    }
    if (role === "USER") {
      setShowDonatePopup(true);
    }
  };

  const acceptDonateHandler = () => {
    setShowDonatePopup(false);
    setIsAddingDonation(true);
  };
  
  return (
    <Stack
      width={"40%"}
      padding={3}
      boxShadow={"0 0 10px #00000022"}
      borderRadius={3}
      height={"fit-content"}
      position={"sticky"}
      top={100}
      right={0}
    >
      <Stack
        direction={"row"}
        spacing={2}
        style={{ backgroundColor: "#ffa62933" }}
        borderRadius={"50px"}
        padding={1}
      >
        <Avatar
          alt={event.title}
          src={event.image}
          sx={{ width: 65, height: 65, border: "2px solid orange" }}
        />
        <Stack justifyContent={"center"}>
          <Typography>Tiền ủng hộ sẽ được gửi tới</Typography>
          <Typography fontWeight={600} fontSize={20}>
            aSheep Charity
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} marginTop={2} spacing={1}>
        <Typography fontSize={17}>Còn </Typography>
        <Chip
          size="large"
          style={{ fontSize: 17 }}
          label={
            (new Date(event.dateEnd) - new Date(event.dateBegin)) /
              (1000 * 60 * 60 * 24) +
            " ngày"
          }
        />
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} marginTop={4}>
        <Typography fontSize={18}>
          Đã quyên góp được{" "}
          <span style={{ fontWeight: "600", color: "#fb8500" }}>
            {event.category?.name === "Tiền"
              ? currencyFormatter.format(event.amountGot)
              : event.amountGot + " " + event.category?.unit}
          </span>
        </Typography>
        <Typography fontWeight={600} fontSize={19}>
          {Math.round((event.amountGot / event.amountNeeded) * 100) + "%"}
        </Typography>
      </Stack>
      <Stack
        height={12}
        style={{ backgroundColor: "#ddd" }}
        borderRadius={2}
        marginTop={1}
      >
        <Stack
          height={12}
          width={(event.amountGot / event.amountNeeded) * 100 + "%"}
          style={{ backgroundColor: "orange" }}
          borderRadius={2}
        ></Stack>
      </Stack>
      <Typography marginTop={1} textAlign={"end"}>
        Còn{" "}
        <span style={{ fontWeight: "600", color: "#fb8500" }}>
          {event.category?.name === "Tiền"
            ? currencyFormatter.format(event.amountNeeded - event.amountGot)
            : event.amountNeeded - event.amountGot + " " + event.category?.unit}
        </span>
      </Typography>

      {role !== "ADMIN" && (
        <Stack marginTop={3} alignItems={"center"}>
          <Tooltip
            title={!event.donating && "Sự kiện này không nhận quyên góp nữa!"}
          >
            <span>
              <Button
                variant="contained"
                style={{
                  borderRadius: "50px",
                  padding: "8px 32px",
                  fontSize: "17px",
                  backgroundImage:
                    "linear-gradient(to right, #298474, #092849)",
                }}
                onClick={donateHandler}
                disabled={!event.donating}
              >
                Quyên góp
              </Button>
            </span>
          </Tooltip>
        </Stack>
      )}
      {role === "ADMIN" && (
        <Stack
          marginTop={3}
          spacing={1}
          alignItems={"center"}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Tooltip
            title={!event.donating && "Sự kiện này không nhận quyên góp nữa!"}
          >
            <span>
              <Button
                variant="outlined"
                style={{
                  fontSize: "14px",
                  minWidth: 230,
                }}
                onClick={() => setOpenAddDonation(true)}
                disabled={!event.donating}
              >
                Tạo quyên góp nhanh
              </Button>
            </span>
          </Tooltip>
          <Tooltip
            title={
              event.donating &&
              "Chưa phân phát được! Sự kiện này còn đang nhận quyên góp!"
            }
          >
            <span>
              <Button
                variant="outlined"
                style={{
                  fontSize: "14px",
                  minWidth: 230,
                }}
                onClick={handleOpenDistribution}
                disabled={event.donating}
              >
                Tạo phân phối nhanh
              </Button>
            </span>
          </Tooltip>

          <Link to={"/admin/manage/events/" + event.id + "/them-phan-phat"}>
            <Button
              variant="outlined"
              style={{
                fontSize: "14px",
                minWidth: 230,
              }}
              disabled={event.donating}
            >
              Tạo Phân phối
            </Button>
          </Link>
        </Stack>
      )}
      {openAddDistribution && (
        <DistributionPopup
          openState={openAddDistribution}
          setOpenState={setOpenAddDistribution}
        />
      )}
      {openAddDonation && (
        <AddDonationPopup
          onCloseModal={() => setOpenAddDonation(false)}
          event={event}
        />
      )}
      {showDonatePopup && (
        <DonationInfoPopup
          name={user.name}
          onCloseModal={() => setShowDonatePopup(false)}
          onAccept={acceptDonateHandler}
          eventType={event.category.name === "Tiền" ? "money" : "item"}
        />
      )}
      {isAddingDonation && (
        <AddDonationPopup
          onCloseModal={() => setIsAddingDonation(false)}
          onAfterDonate={onAfterDonate}
          event={event}
          donor={user}
        />
      )}
    </Stack>
  );
}

export default EventInfo;

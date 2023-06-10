import { Avatar, Button, Chip, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DonorService } from "../../../services";
import leaderboardImg from "../../../assets/images/leaderboard-background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

function Number({ width, color, number }) {
  return (
    <Stack
      width={width}
      height={width}
      borderRadius={50}
      style={{ backgroundColor: color }}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={18}
      fontWeight={600}
      position={"absolute"}
      bottom={"-" + width / 2 + "px"}
    >
      {number}
    </Stack>
  );
}

function NameScore({ name, score, color, top }) {
  return (
    <Stack
      textAlign={"center"}
      position={"absolute"}
      top={top}
      alignItems={"center"}
    >
      <Typography color={"white"} fontSize={20} fontWeight={800}>
        {name}
      </Typography>
      <Stack
        marginTop={1}
        style={{ backgroundColor: color }}
        width={"fit-content"}
        paddingX={2}
        borderRadius={2}
        fontWeight={800}
      >
        {score + " điểm"}
      </Stack>
    </Stack>
  );
}

function Photo({ photo, id }) {
  const navigate = useNavigate();
  return (
    <Avatar
      src={photo}
      sx={{ width: "100%", height: "100%", cursor: "pointer" }}
      onClick={() => navigate("/nha-hao-tam/" + id)}
    />
  );
}

function Row({ index, photo, name, score, id }) {
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      spacing={2}
      borderRadius={"16px"}
      key={Math.random()}
      style={{ backgroundColor: "#ffffffee", cursor: "pointer" }}
      paddingY={1}
      paddingX={2}
      onClick={() => navigate("/nha-hao-tam/" + id)}
      alignItems={"center"}
    >
      <Typography
        fontWeight={800}
        fontSize={20}
        fontStyle={"italic"}
        color={"#2AC48A"}
      >
        {index}
      </Typography>
      <Avatar alt={name} src={photo} sx={{ width: 50, height: 50 }} />
      <Stack justifyContent={"center"} flexGrow={1}>
        <Typography fontSize={16}>{name}</Typography>
      </Stack>
      <Stack justifyContent={"center"}>
        <Typography fontSize={18} fontWeight={600}>
          {score}
        </Typography>
      </Stack>
    </Stack>
  );
}

function Leaderboard() {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState(null);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    DonorService.getAllDonors()
      .then((fetchedDonors) => {
        setDonors(fetchedDonors.data);
      })
      .catch((e) => {
        setError("Có sự cố với đường truyền mạng! Vui lòng thử lại.");
      });
  }, []);

  if (donors.length > 0) donors.sort((a, b) => b.score - a.score);

  return (
    <Stack
      marginTop={6}
      paddingY={5}
      paddingX={3}
      style={{
        backgroundImage: `url(${leaderboardImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Typography textAlign={"center"} fontSize={36} color={"white"}>
        Vinh danh
      </Typography>
      {donors.length > 0 && (
        <Stack marginTop={7} marginBottom={12} direction={"row"} spacing={4}>
          <Stack
            direction={"row"}
            spacing={4}
            justifyContent={"center"}
            alignItems={"center"}
            flexGrow={1}
          >
            <Stack
              width={224}
              height={224}
              borderRadius={"50%"}
              border={"4px solid #51E9FE"}
              boxShadow={"0 0 20px #51E9FE66"}
              position={"relative"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <Photo photo={donors[1].photo} id={donors[1].id} />
              <Number width={27} number={2} color={"#51E9FE"} />
              <NameScore
                name={donors[1].name}
                score={donors[1].score}
                color={"#51E9FE"}
                top={250}
              />
            </Stack>
            <Stack
              width={300}
              height={300}
              borderRadius={"50%"}
              border={"4px solid #FFF502"}
              boxShadow={"0 0 20px #FFF50266"}
              position={"relative"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <Photo photo={donors[0].photo} id={donors[0].id} />
              <Number width={30} number={1} color={"#FFF502"} />
              <FontAwesomeIcon
                icon={faCrown}
                color="#FF9704"
                style={{
                  position: "absolute",
                  top: -52,
                }}
                fontSize={40}
              />
              <NameScore
                name={donors[0].name}
                score={donors[0].score}
                color={"#FFF502"}
                top={325}
              />
              <Stack textAlign={"center"} position={"absolute"} top={325}>
                <Typography color={"white"} fontSize={20} fontWeight={800}>
                  {donors[0].name}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={175}
              height={175}
              borderRadius={"50%"}
              border={"4px solid #FF9FFA"}
              boxShadow={"0 0 20px #FF9FFA66"}
              position={"relative"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <Photo photo={donors[2].photo} id={donors[2].id} />
              <Number width={24} number={3} color={"#FF9FFA"} />
              <NameScore
                name={donors[2].name}
                score={donors[2].score}
                color={"#FF9FFA"}
                top={200}
              />
            </Stack>
          </Stack>
          {seeMore && (
            <Stack spacing={2} flexGrow={1} paddingX={3}>
              {" "}
              {donors.slice(3, 10).map((donor, index) => (
                <Row
                  name={donor.name}
                  score={donor.score}
                  photo={donor.photo}
                  id={donor.id}
                  index={index + 4}
                />
              ))}
            </Stack>
          )}
        </Stack>
      )}

      <Stack alignItems={"end"}>
        <Button
          variant="contained"
          style={{ borderRadius: "40px", textTransform: "none" }}
          onClick={() => setSeeMore((prev) => !prev)}
        >
          {!seeMore ? "Xem thêm" : "Ẩn bớt"}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Leaderboard;

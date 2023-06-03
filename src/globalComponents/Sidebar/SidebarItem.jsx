import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function SidebarItem({ item }) {
  const [active, setActive] = useState(false);
  const isMenuShown = useSelector((state) => state.ui.isMenuShown);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    if (active === true) setBgColor("#eee");
    else setBgColor("white");
  }, [active]);

  return (
    <NavLink
      to={item.route}
      className={({ isActive }) =>
        isActive ? setActive(true) : setActive(false)
      }
      style={{ textDecoration: "none" }}
    >
      <Stack
        direction={"row"}
        spacing={2}
        style={{ backgroundColor: bgColor }}
        paddingX={2}
        paddingY={2}
        alignItems={"center"}
        onMouseOver={() => setBgColor("#eee")}
        onMouseLeave={() => {
          if (active === false) setBgColor("white");
        }}
      >
        <FontAwesomeIcon
          icon={item.icon}
          fontSize={20}
          color={active ? "#060" : "#444"}
        />
        {isMenuShown && (
          <Typography
            whiteSpace={"nowrap"}
            color={active ? "#060" : "#444"}
            fontWeight={active ? "bold" : "normal"}
          >
            {item.name}
          </Typography>
        )}
      </Stack>
    </NavLink>
  );
}

export default SidebarItem;

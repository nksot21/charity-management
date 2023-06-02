import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function SidebarItem({ item }) {
  const [active, setActive] = useState(false);
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
        style={
          active
            ? { backgroundColor: "#eee" }
            : { backgroundColor: "white" }
        }
        paddingX={2}
        paddingY={2}
        alignItems={"center"}
      >
        <FontAwesomeIcon
          icon={item.icon}
          fontSize={20}
          color={active ? "#060" : "#444"}
        />
        <Typography whiteSpace={"nowrap"} color={active ? "#060" : "#444"} fontWeight={active ? "bold" : "normal"}>
          {item.name}
        </Typography>
      </Stack>
    </NavLink>
  );
}

export default SidebarItem;

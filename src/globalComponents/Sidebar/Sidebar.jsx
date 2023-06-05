import React from "react";
import { sidebarMenu } from "./SidebarMenu";
import { Divider, Stack, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const isMenuShown = useSelector((state) => state.ui.isMenuShown);
  const { role } = useSelector((state) => state.auth);

  return (
    <Stack
      position={"sticky"}
      top={70}
      left={0}
      borderRight={"1px solid #ddd"}
      width={"fit-content"}
    >
      <Stack marginTop={2} width={"100%"}>
        {sidebarMenu
          .filter((item) => item.roles.includes(role))
          .map((item, index) => (
            <>
              <SidebarItem key={item.id} item={item} />
              {index === 3 && (
                <Divider
                  style={{
                    alignSelf: "center",
                    width: "90%",
                    backgroundColor: "#666",
                    marginTop: "4px",
                    marginBottom: "4px",
                  }}
                />
              )}
            </>
          ))}
      </Stack>
      {isMenuShown && (
        <Typography
          padding={2}
          marginTop={20}
          fontSize={14}
          textAlign={"center"}
        >
          aSheep Charity Management
        </Typography>
      )}
    </Stack>
  );
}

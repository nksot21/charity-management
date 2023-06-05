import React from "react";
import { sidebarMenu } from "./SidebarMenu";
import { Divider, Stack, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <Stack position={"sticky"} top={70} left={0}>
      <Stack marginTop={2} width={"100%"}>
        {sidebarMenu.map((item, index) => (
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
      <Typography padding={2}>aSheep Charity Management</Typography>
    </Stack>
  );
}

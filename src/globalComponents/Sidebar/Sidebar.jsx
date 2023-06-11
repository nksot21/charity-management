import React, { useEffect, useState } from "react";
import { sidebarMenu } from "./SidebarMenu";
import { Divider, Stack, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { useDispatch, useSelector } from "react-redux";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey } from '@mui/material/colors'

export default function Sidebar() {
  const isMenuShown = useSelector((state) => state.ui.isMenuShown);
  const { role } = useSelector((state) => state.auth);

  return (
    <Stack
      position={"sticky"}
      top={70}
      left={0}
      borderRight={"1px solid #ddd"}
      width={isMenuShown ? "240px" : "fit-content"}
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
        // <Typography
        //   padding={2}
        //   marginTop={20}
        //   fontSize={14}
        //   textAlign={"center"}
        // >
        //   aSheep Charity Management
        // </Typography>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: "100px"}}>
          <a href="https://facebook.com"> <FacebookIcon style={{margin: "0 12px 5px 12px"}} sx={{ color: grey[800] }}/> </a>
          <a href="https://youtube.com">  <YouTubeIcon style={{margin: "0 12px 5px 12px"}} sx={{ color: grey[800] }}/></a>
          <a href="#"><InstagramIcon style={{margin: "0 12px 5px 12px"}} sx={{ color: grey[800] }}/></a>
        </div>
      )}
    </Stack>
  );
}

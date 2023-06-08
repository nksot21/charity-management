import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../globalComponents/Sidebar/Sidebar";
import { Stack } from "@mui/material";

export default function Homepage() {
  return (
    <Stack direction={"row"}>
      <Stack>
        <Sidebar />
      </Stack>
      <Stack padding={1} flexGrow={1} paddingBottom={10}>
        <Outlet />
      </Stack>
    </Stack>
  );
}

import { Container, Row, Col } from "react-bootstrap";
import Header from "../src/globalComponents/Header/Header";
import { Outlet } from "react-router";
import Footer from "./globalComponents/Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";

const Root = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container fluid style={{ padding: "0px", margin: "0" }}>
        <Header />
        <Stack minHeight={"96vh"}>
          <Outlet></Outlet>
        </Stack>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
export default Root;

import { Container, Row, Col } from "react-bootstrap";
import Header from "../src/globalComponents/Header/Header";
import Sidebar from "../src/globalComponents/Sidebar/Sidebar";
import { Outlet } from "react-router";
import LandingPage from "./modules/LandingPage/screens/LandingPage";
import Footer from "./globalComponents/Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Root = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container fluid style={{ padding: "0px", margin: "0" }}>
        {/* <Header /> */}
        <Header />
        <Row style={{ padding: "0px", margin: "0" }}>
          <Col style={{ padding: "0px" }}>
            <Outlet>
              {" "}
              <LandingPage />{" "}
            </Outlet>
          </Col>
        </Row>
        {window.location.pathname === "/gioi-thieu" && <Footer />}
      </Container>
    </ThemeProvider>
  );
};
export default Root;

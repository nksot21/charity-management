import { Container, Row, Col } from "react-bootstrap";
import Header from "../src/globalComponents/Header/Header"
import Sidebar from "../src/globalComponents/Sidebar/Sidebar"
import { Outlet } from "react-router";
import './App.css';
import LandingPage from "./modules/LandingPage/screens/LandingPage";
import Footer from "./globalComponents/Footer/Footer";

const Root = () => {
  return (
    <Container fluid style={{padding: '0px', margin:'0'}}>
      {/* <Header /> */}
      <Header />
      <Row style={{padding: '0px', margin:'0'}}>
        <Col style={{padding: '0px'}}>
          <Outlet>  <LandingPage /> </Outlet>
        </Col>
      </Row>
        {window.location.pathname === '/gioi-thieu' && <Footer />}

    </Container>
   
  );
};
export default Root;

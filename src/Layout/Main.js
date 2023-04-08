import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../components/pages/Share/LeftSideNav/LeftSideNav";
import RightSideNav from "../components/pages/Share/RigthSideNav/RightSideNav";
import Header from "../components/pages/Share/Header/Header";
import Footer from "../components/pages/Share/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <small>
        <Footer></Footer>
      </small>
    </div>
  );
};

export default Main;

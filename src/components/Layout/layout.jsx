/* eslint-disable react-hooks/exhaustive-deps */
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavbar from "../../components/shared/navbar/navbar";

const Layout = props => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  useEffect(() => {
    console.log("props", props);
  }, [])

  return useMemo(
    () => (
      <Container fluid="true" id="container">
        <Row>
          <Col id="navbar" sm="12">
            {/* {!hideOnScroll && <AppNavbar />} */}
            <AppNavbar/>
          </Col>
          <Col id="body" sm="12">
            {props.children}
          </Col>
        </Row>
      </Container>
    ),
    [hideOnScroll]
  );
};

export default Layout;
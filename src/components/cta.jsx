"use client";
import React from "react";
import GreenButton from "./greenButton";
import { Col, Container, Row } from "react-bootstrap";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta_content">
        <Container>
          <Row>
            <Col lg={7} md={12}>
              <h2>
                Ready to Advance your Digital Transformation?
                <br />
                <span>Get in touch with us.</span>
              </h2>
              <p>
                Discover why TechLogans is the right partner for your business.
              </p>
            </Col>
            <Col lg={5} md={12}>
              <div className="contact_us_btn">
                <GreenButton name="contact us" route="contact-us" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CTA;

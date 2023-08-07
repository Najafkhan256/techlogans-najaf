"use client";
import { ServicesData } from "@/data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "../greenButton";
import OutlineButton from "../outlineButton";

const OurServices = () => {
  return (
    <div className="OurServices">
      <div className="OurServices-content">
        <h2>
          our <span>services</span>{" "}
        </h2>
      </div>
      <Container>
        <Row>
          {ServicesData &&
            ServicesData?.slice(0, 4).map((service, index) => {
              return (
                <Col lg={3} md={6} sm={12} key={index} className="my-3">
                  <div className="card-wrap">
                    <div className="card-header">{service.icon}</div>
                    <div className="card-content">
                      <h1 className="card-title">{service.title}</h1>
                      <p className="card-text">{service.description}</p>
                      <div className="mt-2">
                        <GreenButton
                          name="Read more"
                          route={service.buttonRoute}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
        <div className="d-flex justify-content-center mt-5">
          <OutlineButton name="Read more" route="services" />
        </div>
      </Container>
    </div>
  );
};

export default OurServices;

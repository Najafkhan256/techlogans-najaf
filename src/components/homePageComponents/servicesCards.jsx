import { ServicesData } from "@/data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "../greenButton";

const ServicesCards = () => {
  return (
    <Container className="mb-4">
      <h2 className="popular_stacks">
        our <span> popular stacks</span>{" "}
      </h2>
      <Row>
        {ServicesData &&
          ServicesData?.map((service, index) => {
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
                        route={"services/" + service.title}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default ServicesCards;

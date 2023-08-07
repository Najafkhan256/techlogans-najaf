"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "@/images/logo.png";

const chooseData = [
  {
    number: "01",
    title: "Disciplined agile",
    description:
      "We follow a disciplined and structured Agile delivery methodology, everything happens on-time, we deliver on-time.  ",
  },
  {
    number: "02",
    title: "DevOps",
    description:
      "Agile and DevOps are integral components of our delivery model, our process is driven by DevOps, and each team has an assigned DevOps engineer.",
  },
  {
    number: "03",
    title: "Transparent partnership",
    description:
      "We work together, from day one. We use your source control, your infrastructure, and you will see product demos every two weeks.",
  },
  {
    number: "04",
    title: "We are Tech Logans",
    description:
      "We are multi-domain experts, and design solutions that match your needs, accounting for functional, operational, and financial requirements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-us">
      <Container>
        <Row>
          <Col md={8} className="offset-md-2">
            <h2 className="mt-5 text-center">Why choose us?</h2>
            <p className="mb-5 text-center">
              Our delivery excellence is built on top of:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Row>
              <Col sm={12}></Col>
              <Col sm={12}></Col>
            </Row>
          </Col>
          <Col md={4}>
            <div>
              <Image
                src={Logo}
                alt="Techlogans logo"
                height={400}
                width={400}
              />
            </div>
          </Col>
          <Col md={4}>
            <Row>
              <Col sm={12}></Col>
              <Col sm={12}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

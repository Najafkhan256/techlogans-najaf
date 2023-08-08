"use client";
import { StackLogosData } from "@/data";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const StackLogos = () => {
  return (
    <Container className="my-4">
      <Row>
        {StackLogosData &&
          StackLogosData?.slice(0, 6)?.map((logo) => {
            return (
              <Col lg={2}>
                <div className="logoWrapper">
                  {/* <Link href={`services/${logo.title}`}> */}
                  <div>
                    <div>{logo.icon}</div>
                    <h2>{logo.title}</h2>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default StackLogos;

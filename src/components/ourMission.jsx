"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MissionVission from "@/images/background/mission-vission.svg";
import { MissionData } from "@/data";

const OurMission = () => {
  return (
    <div className="ourMission light_background">
      <h3>
        our <span> mission </span>
      </h3>
      <Container className="">
        <Row>
          {MissionData &&
            MissionData.map((mission) => {
              return (
                <Col lg={4}>
                  <div className="cardWrapper">
                    <div className="imageContainer">{mission.icon}</div>
                    <div className="contentWrapper">
                      <h2>{mission.heading}</h2>
                      <p>{mission.text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default OurMission;

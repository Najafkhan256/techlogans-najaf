"use client";
import React from "react";
import GreenButton from "./greenButton";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

import PhenixImage from "@/images/the-phenix-group.png";
import CasinoImage from "@/images/casino.png";
import { AllPorjectsData } from "@/data";

const OurWork = () => {
  return (
    <React.Fragment>
      {AllPorjectsData.map((project, index) => {
        const isEvenColumn = index % 2 === 0;
        return (
          <div className="case_study_card my-5" key={index}>
            <Container>
              <Row>
                {isEvenColumn ? (
                  <>
                    <Col lg={6}>
                      <div className="slider_content">
                        <div>
                          <Link href={`all-case-studies/${project.title}`}>
                            <h3 className="d-md-block title mt-3 mt-md-0 slider_title text-left">
                              {project.title}
                            </h3>
                          </Link>
                          <div className="animatedWrap">
                            <p className="section-summary text-left">
                              {project.description}
                            </p>
                          </div>
                          <div className="mt-5 d-flex justify-content-center justify-content-center justify-content-lg-start">
                            <GreenButton
                              name="LEARN MORE"
                              route={`all-case-studies/${project.title}`}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="image_wrapper mt-3">{project.image}</div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col lg={6}>
                      <div className="image_wrapper mt-3">{project.image}</div>
                    </Col>
                    <Col lg={6}>
                      <div className="slider_content">
                        <div>
                          {/* <Link href={`${project.link}`}> */}
                          <Link href={`all-case-studies/${project.title}`}>
                            <h3 className="d-md-block title  mt-3 mt-md-0 slider_title text-left">
                              {project.title}
                            </h3>
                          </Link>
                          <div className="animatedWrap">
                            <p className="section-summary text-left">
                              {project.description}
                            </p>
                          </div>
                          <div className="mt-5 d-flex justify-content-center justify-content-center justify-content-lg-start">
                            <GreenButton
                              name="LEARN MORE"
                              route={`all-case-studies/${project.title}`}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            </Container>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default OurWork;

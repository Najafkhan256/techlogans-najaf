"use client";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimatedBg from "../animatedBg";
import AboutImage from "@/images/about.svg";
import Image from "next/image";
import CaseStudySlider from "../caseStudySlider";
import AOS from "aos";
import "aos/dist/aos.css";

const BriefIntro = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="briefIntro">
      {/* <AnimatedBg /> */}
      <Container className="pt-md-3 pt-0">
        <Row>
          <Col lg={6} md={12} className="order-lg-1 order-2 d-none d-md-block">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="brief_image"
            >
              <Image src={AboutImage} alt="about" height={480} width={480} className="img-fluid" />
            </div>
          </Col>
          <Col lg={6} md={12} className="order-lg-2 order-1">
            <div
              className="briefContentWrap"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="title-container mb-0">
                <h2 className="section-title">
                  A Brief Intro <span>About Tech Logans</span>
                </h2>
              </div>
              <div className="section-summary">
                <p>
                  Tech Logans is an experienced offshore web development company
                  providing cost effective development services using modern
                  technologies and the best practices. We deliver high quality
                  custom websites and are committed to our clients’ success. We
                  use a proven global delivery model to reduce and eliminate
                  challenges often tied to other offshore web development
                  practices. Our global delivery model allows flexibility for
                  customers to adapt to our solutions to their day-to-day
                  problems.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BriefIntro;

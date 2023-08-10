"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimatedBg from "../animatedBg";
import AboutImage from "@/images/about.svg";
import Image from "next/image";
import CaseStudySlider from "../caseStudySlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchData } from "@/utils/api";

const BriefIntro = () => {
  const [briefData, setBriefData] = useState(null);

  console.log("briefData", briefData);

  useEffect(() => {
    const fetchBriefData = async () => {
      try {
        const apiUrl = "/brief-intros";
        const responseData = await fetchData(apiUrl);
        setBriefData(responseData);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchBriefData();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="briefIntro mb-5">
      {/* <AnimatedBg /> */}
      <Container className="pt-md-3 pt-0">
        <Row>
          <Col lg={6} md={12} className="order-lg-1 order-2 d-none d-md-block">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="brief_image"
            >
              <Image
                // src={briefData?.data[0]?.attributes?.image?.url}
                src={AboutImage}
                alt="about"
                height={480}
                width={480}
                className="img-fluid"
              />
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
                  {briefData?.data[0]?.attributes?.title}
                </h2>
              </div>
              <div className="section-summary">
                <p>{briefData?.data[0]?.attributes?.briefDescription}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BriefIntro;

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
import imageUrlBuilder from "@/utils/imageUrl";

const BriefIntro = () => {
  const [briefData, setBriefData] = useState(null);

  useEffect(() => {
    const fetchBriefData = async () => {
      try {
        const apiUrl = "/brief-intros";
        const responseData = await fetchData(apiUrl);
        setBriefData(responseData.data);
      } catch (error) {
        console.error("Error fetching brief data:", error);
      }
    };

    fetchBriefData();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  if (briefData === null) {
    return "";
  }
  return (
    <div className="briefIntro mb-5">
      {/* <AnimatedBg /> */}
      <Container className="pt-md-3 pt-0">
        <Row>
          {briefData.map((data) => (
            <React.Fragment key={data.id}>
              <Col
                lg={6}
                md={12}
                className="order-lg-1 order-2 d-none d-md-block"
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="brief_image"
                >
                  <Image
                    src={imageUrlBuilder(
                      data?.attributes?.image?.data?.attributes?.url
                    )}
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
                    <h2 className="section-title">{data?.attributes?.title}</h2>
                  </div>
                  <div className="section-summary">
                    <p>{data?.attributes?.briefDescription}</p>
                  </div>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BriefIntro;

"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import HomeBannerImage from "@/images/banner-bg.svg";
import HomeBannerTopImage from "@/images/hero-two.png";
import { Col, Container, Row } from "react-bootstrap";
import TypedHeader from "../typedHeader";
import GreenButton from "@/components/greenButton";
import SocialLinks from "../socialLinks";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="homeBannerWrap">
      <div className="homeBanner">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="homeBannerContentWrap">
                <div
                  className="homeBannerContent"
                  // data-aos="fade-left"
                  // data-aos-duration="2000"
                >
                  <h1>We Are</h1>
                  <TypedHeader />
                  <div
                    className="bannerButton"
                    // data-aos="fade-up"
                    // data-aos-duration="3000"
                  >
                    <GreenButton name="learn more" route={"contact-us"} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div
                className="homeBannerTopImage"
                data-aos="fade-right"
                // data-aos-duration="2000"
              >
                <Image
                  src={HomeBannerTopImage}
                  alt="hero"
                  height={400}
                  width={500}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <SocialLinks /> */}
      <div className="bannerBottomImage">
        <Image src={HomeBannerImage} alt="home banner image" />
      </div>
    </div>
  );
};

export default HomeBanner;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import PhenixImage from "@/images/the-phenix-group.png";
import CasinoImage from "@/images/casino.png";
import { Col, Row } from "react-bootstrap";
import GreenButton from "./greenButton";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CaseStudySlider = () => {
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-prev">
      <FaArrowLeft />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-next">
      <FaArrowRight />
    </button>
  );
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // autoplay: true,
    // autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div className="case_study_card">
        <Row>
          <Col lg={6}>
            <div className=" slider_content">
              <div>
                <Link href={`/all-case-studies/https://thephenixgroup.com/`}>
                  <h3 className="d-md-block title  mt-md-0 slider_title text-left">
                    The Phenix Group (Gatsbyjs, Contentful)
                  </h3>
                </Link>
                <div className="animatedWrap">
                  <p className="section-summary text-left">
                    The Phenix Group has a deep passion for helping individuals
                    fix bad credit and achieve financial security. We built
                    thier marketing website using Gatbyjs, Contentful and help
                    them with thier technical SEO. They are now getting tons of
                    traffic and user feels better smooth UI/UX.
                  </p>
                  {/* <div className="leftRight"></div> */}
                </div>
                <div className="mt-5  d-flex justify-content-center justify-content-center justify-content-lg-start">
                  <GreenButton name="LEARN MORE"></GreenButton>
                  {/* <Link
            href={`/all-case-studies/https://thephenixgroup.com/`}
            className="btn second-button m-auto"
          >
            LEARN MORE
          </Link> */}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="slider_img img mt-3">
              <Image
                className="header-img img-fluid"
                src={PhenixImage}
                alt="aws"
                width={600}
                height={300}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="case_study_card mx-2">
        <Row>
          {/* <Col lg={6} md={6} sm={12} className="col-lg-6 col-md-6 col-sm-12 col-12"> */}

          {/* <Col lg={6} md={6} sm={12} className="col-lg-5 col-md-5 col-sm-12 col-12"> */}
          <Col lg={6} md={12} sm={12}>
            <div className="mt-3 slider_content">
              <div className="">
                <Link href={`/all-case-studies/https://hycasino.com/`}>
                  <h3 className="d-md-block title  mt-md-0 slider_title text-left">
                    HyCasino (Nextjs, REST API)
                  </h3>
                </Link>
                <div className="animatedWrap">
                  <p className="section-summary text-left">
                    Choosing The Best Online Casinos. A directory website built
                    with Nextjs and REST API.
                  </p>
                  {/* <div className="leftRight"></div> */}
                </div>
                <div className="mt-5  d-flex justify-content-center justify-content-center justify-content-lg-start">
                  <GreenButton name="LEARN MORE"></GreenButton>
                  {/* <Link
            href={`/all-case-studies/https://hycasino.com/`}
            className="btn second-button m-auto"
          >
            LEARN MORE
          </Link> */}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="slider_img img mt-3">
              <Image
                className="header-img img-fluid"
                src={CasinoImage}
                alt="aws"
                width={600}
                height={300}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Slider>
  );
};
export default CaseStudySlider;

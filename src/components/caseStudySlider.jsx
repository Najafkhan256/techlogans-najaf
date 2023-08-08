import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import PhenixImage from "@/images/the-phenix-group.png";
import CasinoImage from "@/images/casino.png";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "./greenButton";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AllPorjectsData } from "@/data";

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
    <div className="light_background case_study_details pb-5">
      <h2>our latest project</h2>

      <Slider {...settings}>
        {AllPorjectsData &&
          AllPorjectsData.map((project, index) => {
            return (
              <div className="case_study_card my-lg-5 mb-3 pb-5" key={index}>
                <Container>
                  <Row>
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
                            <div className="case_study_stacks">
                              <ul>
                                <li>ReacJs</li>
                                <li>ReacJs</li>
                                <li>Mongo DB</li>
                                <li>ReacJs</li>
                                <li>ReacJs</li>
                              </ul>
                            </div>
                          </div>
                          <div className=" buttonWrapper">
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
                  </Row>
                </Container>
              </div>
            );
          })}
        {/* <div className="case_study_card">
        <Row>
          <Col lg={6}>
            <div className=" slider_content">
              <div>
                <Link
                  href={`all-case-studies/The Phenix Group (Gatsbyjs, Contentful)`}
                >
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
                </div>
                <div className="mt-5  d-flex justify-content-center justify-content-center justify-content-lg-start">
                  <GreenButton
                    name="LEARN MORE"
                    route="all-case-studies/The Phenix Group (Gatsbyjs, Contentful)"
                  ></GreenButton>
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
          <Col lg={6} md={12} sm={12}>
            <div className="mt-3 slider_content">
              <div className="">
                <Link href={`all-case-studies/HyCasino (Nextjs, REST API)`}>
                  <h3 className="d-md-block title  mt-md-0 slider_title text-left">
                    HyCasino (Nextjs, REST API)
                  </h3>
                </Link>
                <div className="animatedWrap">
                  <p className="section-summary text-left">
                    Choosing The Best Online Casinos. A directory website built
                    with Nextjs and REST API.
                  </p>
                  <div className="case_study_stacks">
                    <ul>
                      <li>ReacJs</li>
                      <li>ReacJs</li>
                      <li>Mongo DB</li>
                      <li>ReacJs</li>
                      <li>ReacJs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-5  d-flex justify-content-center justify-content-center justify-content-lg-start">
                  <GreenButton name="LEARN MORE" route="/"></GreenButton>
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
      </div> */}
      </Slider>
    </div>
  );
};
export default CaseStudySlider;

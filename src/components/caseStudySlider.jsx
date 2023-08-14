import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import PhenixImage from "@/images/the-phenix-group.png";
import CasinoImage from "@/images/casino.png";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "./greenButton";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AllPorjectsData } from "@/data";
import { fetchData } from "@/utils/api";
import imageUrlBuilder from "@/utils/imageUrl";

const CaseStudySlider = () => {
  const [caseStudyData, setCaseStudyData] = useState(null);

  console.log("caseStudyData", caseStudyData);

  useEffect(() => {
    const fetchCaseStudyData = async () => {
      try {
        const apiUrl = "/case-studies";
        const responseData = await fetchData(apiUrl);
        setCaseStudyData(responseData);
      } catch (error) {
        console.error("Error fetching case study data:", error);
      }
    };

    fetchCaseStudyData();
  }, []);

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

  if (caseStudyData === null) {
    return "";
  }

  return (
    <div className="light_background case_study_details pb-5">
      <h2>our latest project</h2>

      <Slider {...settings}>
        {caseStudyData &&
          caseStudyData.data &&
          caseStudyData?.data?.map((project, index) => {
            return (
              <div className="case_study_card my-lg-5 mb-3 pb-5" key={index}>
                <Container>
                  <Row>
                    <Col lg={6}>
                      <div className="slider_content">
                        <div>
                          <Link
                            href={`all-case-studies/${project.attributes.title}`}
                          >
                            <h3 className="d-md-block title mt-3 mt-md-0 slider_title text-left">
                              {project.attributes.title}
                            </h3>
                          </Link>
                          <div className="animatedWrap">
                            <p className="section-summary text-left">
                              {project.attributes.caseStudyDescription}
                            </p>
                            <div className="case_study_stacks">
                              <ul>
                                {project.attributes.technologies.data.map(
                                  (technology, index) => (
                                    <li key={index}>{technology.technology}</li>
                                  )
                                )}
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
                      <div className="image_wrapper mt-3">
                        <img
                          className="header-img img-fluid"
                          src={
                            project.attributes.caseStudyImage.data
                              ? imageUrlBuilder(
                                  project.attributes.caseStudyImage.data
                                    .attributes.url
                                )
                              : CasinoImage
                          }
                          // src={CasinoImage}
                          alt="HyCasino"
                          width={600}
                          height={300}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
export default CaseStudySlider;

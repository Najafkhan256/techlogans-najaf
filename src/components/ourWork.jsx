"use client";
import React, { useEffect, useState } from "react";
import GreenButton from "./greenButton";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

import PhenixImage from "@/images/the-phenix-group.png";
import CasinoImage from "@/images/casino.png";
import { AllPorjectsData } from "@/data";
import { fetchData } from "@/utils/api";
import imageUrlBuilder from "@/utils/imageUrl";

const OurWork = () => {
  const [caseStudyData, setCaseStudyData] = useState(null);

  console.log("caseStudyData", caseStudyData);

  useEffect(() => {
    const fetchCaseStudyData = async () => {
      try {
        const apiUrl = "/case-studies";
        const responseData = await fetchData(apiUrl);
        setCaseStudyData(responseData.data);
      } catch (error) {
        console.error("Error fetching case study data:", error);
      }
    };

    fetchCaseStudyData();
  }, []);

  return (
    <React.Fragment>
      {caseStudyData &&
        caseStudyData.map((project, index) => {
          const isEvenColumn = index % 2 === 0;
          return (
            <div className="case_study_card my-5 pb-5" key={index}>
              <Container>
                <Row>
                  {isEvenColumn ? (
                    <>
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
                                      <li key={index}>
                                        {technology.technology}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                            <div className="buttonWrapper">
                              <GreenButton
                                name="LEARN MORE"
                                route={`all-case-studies/${project.attributes.title}`}
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
                    </>
                  ) : (
                    <>
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
                      <Col lg={6}>
                        <div className="slider_content">
                          <div>
                            {/* <Link href={`${project.link}`}> */}
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
                                      <li key={index}>
                                        {technology.technology}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                            <div className=" buttonWrapper">
                              <GreenButton
                                name="LEARN MORE"
                                route={`all-case-studies/${project.attributes.title}`}
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

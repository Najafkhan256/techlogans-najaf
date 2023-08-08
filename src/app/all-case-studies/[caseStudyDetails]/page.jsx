"use client";
import React from "react";
import Layout from "@/Layout";
import Banner from "@/components/Banner";
import ServicesCards from "@/components/homePageComponents/servicesCards";
import ContactForm from "@/components/contactForm";
import Map from "@/components/map";
import StackLogos from "@/components/stackLogos";
import { AllPorjectsData } from "@/data";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import GreenButton from "@/components/greenButton";
import MediaObject from "@/components/mediaObject";
import CaseStudyFeatures from "@/components/caseStudyFeatures";

const AllCaseStudyDetails = ({ params }) => {
  const caseStudyTitle = decodeURIComponent(params.caseStudyDetails);

  const selectedProject = AllPorjectsData.find(
    (project) =>
      project.title.toLowerCase() === caseStudyTitle.toLocaleLowerCase()
  );

  if (!selectedProject) {
    return (
      <Layout>
        <Banner name="Project not found" />
        <div>
          <h2>Project not found.</h2>
        </div>
        <ContactForm />
        <Map />
      </Layout>
    );
  }

  return (
    <Layout>
      <Banner name={caseStudyTitle} span="case study" />
      {/* CUSTOMER OVERVIEW */}
      <div className="caseStudy_details">
        <Container>
          <div className="case_study_card">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="image_wrapper mt-3">
                    <Image
                      src={selectedProject.image.props.src.src}
                      alt={caseStudyTitle}
                      height={400}
                      width={800}
                      className=""
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="slider_content">
                    <div>
                      <h2>CUSTOMER OVERVIEW</h2>
                      <h3 className="d-md-block title mt-3 mt-md-0 slider_title text-left">
                        {caseStudyTitle}
                      </h3>
                      <div className="animatedWrap">
                        <p className="section-summary text-left">
                          {selectedProject.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      {/* bussiness challenges */}
      <div className="caseStudy_details light_background">
        <Container>
          <div className="case_study_card">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="slider_content">
                    <div>
                      <h2>BUSINESS CHALLENGES</h2>
                      <h3 className="d-md-block title mt-3 mt-md-0 slider_title text-left">
                        {caseStudyTitle}
                      </h3>
                      <div className="animatedWrap">
                        {/* <p className="section-summary text-left">
                          {selectedProject.description}
                        </p> */}
                        <MediaObject />
                        <MediaObject />
                        <MediaObject />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="image_wrapper mt-3">
                    <Image
                      src={selectedProject.image.props.src.src}
                      alt={caseStudyTitle}
                      height={400}
                      width={800}
                      className=""
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      {/* SOLUTION OVERVIEW */}
      <div className="caseStudy_details">
        <Container>
          <div className="case_study_card">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="image_wrapper mt-3">
                    <Image
                      src={selectedProject.image.props.src.src}
                      alt={caseStudyTitle}
                      height={400}
                      width={800}
                      className=""
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="slider_content">
                    <div>
                      <h2>SOLUTION OVERVIEW</h2>
                      <h3 className="d-md-block title mt-3 mt-md-0 slider_title text-left">
                        {caseStudyTitle}
                      </h3>
                      <div className="animatedWrap">
                        <p className="section-summary text-left">
                          {selectedProject.description}
                        </p>
                      </div>
                      <CaseStudyFeatures />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      <div className="service_we_use light_background">
        <h2>
          Technologies <span> we use</span>
        </h2>

        <StackLogos />
      </div>
    </Layout>
  );
};

export default AllCaseStudyDetails;

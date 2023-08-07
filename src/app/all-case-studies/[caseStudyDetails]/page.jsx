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

const AllCaseStudyDetails = ({ params }) => {
  const caseStudyTitle = decodeURIComponent(params.caseStudyDetails);

  const selectedProject = AllPorjectsData.find(
    (project) =>
      project.title.toLowerCase() === caseStudyTitle.toLocaleLowerCase()
  );

  if (!selectedProject) {
    return (
      <Layout>
        <Banner name="Services Details" />
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
      <Banner name={caseStudyTitle} />
      <div className="caseStudy_details">
        <Image
          src={selectedProject.image.props.src.src}
          alt={caseStudyTitle}
          height={400}
          width={800}
          className=""
        />
      </div>
      <div className="service_we_use">
        <h2>
          Technologies <span> we use</span>
        </h2>
        <StackLogos />
        <div className="main-title">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-12 title"
                data-aos="fade-up"
              >
                <h2>{caseStudyTitle}</h2>

                <p>{selectedProject.description}</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-12"
                data-aos="fade-up"
              >
                <div className="card-container mt-5 mt-md-0">
                  <div className="card-wrapper">
                    <div className="card-contents d-flex">
                      <h3>
                        SKILLS <br /> NEEDED
                      </h3>
                      <h4>
                        HTML/CSS Web Design <br />
                        Development
                      </h4>
                    </div>
                    <div className="card-contents d-flex">
                      <h3>CATEGORIES</h3>
                      <h4 className="graphic">Graphic Design</h4>
                    </div>
                    <div className="card-contents d-flex">
                      <h3>COPYRIGHT</h3>
                      <h4 className="pixeden">Pixeden Company</h4>
                    </div>
                    <button
                      type="button"
                      className="btn-contact-us"
                      // onClick={onClickReadMore}
                    >
                      VIEW LIVE WEBSITE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Map />
    </Layout>
  );
};

export default AllCaseStudyDetails;

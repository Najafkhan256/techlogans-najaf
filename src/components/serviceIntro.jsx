"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "./greenButton";
import { servicesIntroData } from "@/data";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ServicesCards from "./homePageComponents/servicesCards";
import StackLogos from "./stackLogos";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchData } from "@/utils/api";
import imageUrlBuilder from "@/utils/imageUrl";

const ServiceIntro = () => {
  const [serviceIntroData, setServiceIntroData] = useState(null);

  console.log("serviceIntroData", serviceIntroData);

  useEffect(() => {
    const fetchServicesIntroData = async () => {
      try {
        const apiUrl = "/service-intros";
        const responseData = await fetchData(apiUrl);
        setServiceIntroData(responseData.data);
      } catch (error) {
        console.error("Error fetching services intro data:", error);
      }
    };

    fetchServicesIntroData();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="service_Intro">
      <Container>
        <h2>Specializations</h2>
        <p>
          At Tech Tech Logans we specialize in writing high-quality web
          application software, using effective technology, methodology, and
          architecture. While this means we can help with any kind of web
          application development, our main focus is cloud-native, serverless,
          and microservice development, because we believe these domains offer
          the most value in today’s digital ecosystem.
        </p>
      </Container>
      {/* <StackLogos /> */}
      <ServicesCards />
      <Container>
        <Row className="mt-5">
          {serviceIntroData &&
            serviceIntroData?.map((serviceIntro, index) => {
              const isEvenColumn = index % 2 === 0;
              const firstBulletUUID = `a-${index}-0`;
              return (
                <React.Fragment key={index}>
                  {isEvenColumn ? (
                    <>
                      <Col lg={6} className="my-md-5">
                        <div
                          className="image_wrapper"
                          data-aos="fade-right"
                          data-aos-duration="2000"
                        >
                          <img
                            src={imageUrlBuilder(
                              serviceIntro.attributes.serviceIntroImage.data &&
                                serviceIntro.attributes.serviceIntroImage.data
                                  .attributes.url
                            )}
                            alt="cloud native"
                            height={600}
                            width={600}
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                      <Col lg={6} className="my-3">
                        <div className="services_content">
                          <h3>{serviceIntro.attributes.serviceIntroTitle}</h3>
                          <p>
                            {serviceIntro.attributes.serviceIntroDescription}
                          </p>
                          {serviceIntro.attributes.servicesBullets && (
                            <Accordion preExpanded={firstBulletUUID}>
                              {serviceIntro.attributes.servicesBullets.data.map(
                                (bullet, bulletIndex) => (
                                  <AccordionItem
                                    key={bulletIndex}
                                    uuid={`a-${index}-${bulletIndex}`}
                                  >
                                    <AccordionItemHeading>
                                      <AccordionItemButton>
                                        {bullet.name}
                                      </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                      <p>{bullet.name}</p>
                                    </AccordionItemPanel>
                                  </AccordionItem>
                                )
                              )}
                            </Accordion>
                          )}

                          <div className="mt-4">
                            <GreenButton name="Learn More" />
                          </div>
                        </div>
                      </Col>
                    </>
                  ) : (
                    <div>
                      <Row className="py-4">
                        <Col lg={6} className="my-3">
                          <div className="services_content">
                            <h3>{serviceIntro.attributes.serviceIntroTitle}</h3>
                            <p>
                              {serviceIntro.attributes.serviceIntroDescription}
                            </p>
                            {serviceIntro.attributes.servicesBullets && (
                              <Accordion preExpanded={firstBulletUUID}>
                                {serviceIntro.attributes.servicesBullets.data.map(
                                  (bullet, bulletIndex) => (
                                    <AccordionItem
                                      key={bulletIndex}
                                      uuid={`a-${index}-${bulletIndex}`}
                                    >
                                      <AccordionItemHeading>
                                        <AccordionItemButton>
                                          {bullet.name}
                                        </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel>
                                        <p>{bullet.name}</p>
                                      </AccordionItemPanel>
                                    </AccordionItem>
                                  )
                                )}
                              </Accordion>
                            )}

                            <div className="mt-4">
                              <GreenButton name="Learn More" />
                            </div>
                          </div>
                        </Col>
                        <Col lg={6} className="my-3">
                          <div
                            className="image_wrapper"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                          >
                            <img
                              src={imageUrlBuilder(
                                serviceIntro.attributes.serviceIntroImage
                                  .data &&
                                  serviceIntro.attributes.serviceIntroImage.data
                                    .attributes.url
                              )}
                              alt="cloud native"
                              height={600}
                              width={600}
                              className="img-fluid"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ServiceIntro;

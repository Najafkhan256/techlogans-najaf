import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "./greenButton";
import { servicesItroData } from "@/data";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ServicesCards from "./homePageComponents/servicesCards";
import StackLogos from "./stackLogos";

const ServiceIntro = () => {
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
          {servicesItroData &&
            servicesItroData?.map((serviceIntro, index) => {
              const isEvenColumn = index % 2 === 0;
              const firstBulletUUID = `a-${index}-0`;
              return (
                <React.Fragment key={index}>
                  {isEvenColumn ? (
                    <>
                      <Col lg={6} className="my-md-5">
                        <div className="image_wrapper">
                          <Image
                            src={serviceIntro.image}
                            alt="cloud native"
                            height={600}
                            width={600}
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                      <Col lg={6} className="my-3">
                        <div className="services_content">
                          <h3>{serviceIntro.title}</h3>
                          <p>{serviceIntro.description}</p>
                          {serviceIntro.bullets && (
                            <Accordion preExpanded={firstBulletUUID}>
                              {serviceIntro.bullets.map(
                                (bullet, bulletIndex) => (
                                  <AccordionItem
                                    key={bulletIndex}
                                    uuid={`a-${index}-${bulletIndex}`}
                                  >
                                    <AccordionItemHeading>
                                      <AccordionItemButton>
                                        {bullet}
                                      </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                      <p>{bullet}</p>
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
                            <h3>{serviceIntro.title}</h3>
                            <p>{serviceIntro.description}</p>
                            {serviceIntro.bullets && (
                              <Accordion preExpanded={firstBulletUUID}>
                                {serviceIntro.bullets.map(
                                  (bullet, bulletIndex) => (
                                    <AccordionItem
                                      key={bulletIndex}
                                      uuid={`a-${index}-${bulletIndex}`}
                                    >
                                      <AccordionItemHeading>
                                        <AccordionItemButton>
                                          {bullet}
                                        </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel>
                                        <p>{bullet}</p>
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
                          <div className="image_wrapper">
                            <Image
                              src={serviceIntro.image}
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

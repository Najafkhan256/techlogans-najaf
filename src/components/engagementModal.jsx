import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "./greenButton";
import { engagementModelData } from "@/data";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const EngagementModal = () => {
  return (
    <div className="service_Intro">
      <Container>
        <h2>
          Engagement <span> Model</span>
        </h2>
        <p>See how you can work with Tech Logans to build better technology.</p>

        <Row>
          {engagementModelData &&
            engagementModelData?.map((serviceIntro, index) => {
              const isEvenColumn = index % 2 === 0;
              const firstBulletUUID = `a-${index}-0`;
              return (
                <React.Fragment key={index}>
                  {isEvenColumn ? (
                    <>
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
                      <Col lg={6} className="my-3">
                        <div className="services_content">
                          {serviceIntro.title && <h3>{serviceIntro.title}</h3>}
                          {serviceIntro.description && (
                            <p>{serviceIntro.description}</p>
                          )}

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
                          {serviceIntro.secDescription && (
                            <p className="pt-3">
                              {serviceIntro.secDescription}
                            </p>
                          )}
                          <div className="mt-4">
                            <GreenButton name="Learn More" />
                          </div>
                        </div>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col lg={6} className="my-3">
                        <div className="services_content">
                          {serviceIntro.title && <h3>{serviceIntro.title}</h3>}
                          {serviceIntro.description && (
                            <p>{serviceIntro.description}</p>
                          )}
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
                          {serviceIntro.secDescription && (
                            <p className="pt-3">
                              {serviceIntro.secDescription}
                            </p>
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
                    </>
                  )}
                </React.Fragment>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default EngagementModal;

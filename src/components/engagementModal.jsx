import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "./greenButton";
// import { engagementModelData } from "@/data";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchData } from "@/utils/api";
import imageUrlBuilder from "@/utils/imageUrl";
const EngagementModal = () => {
  const [engagementModelData, setEngagementModelData] = useState(null);

  console.log("engagementModelData", engagementModelData);

  useEffect(() => {
    const fetchEngagementModalData = async () => {
      try {
        const apiUrl = "/engagement-modals";
        const responseData = await fetchData(apiUrl);
        setEngagementModelData(responseData.data);
      } catch (error) {
        console.error("Error fetching engagement modals data:", error);
      }
    };

    fetchEngagementModalData();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="service_Intro">
      <Container>
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
                        <div
                          className="image_wrapper"
                          data-aos="fade-right"
                          data-aos-duration="2000"
                        >
                          <img
                            src={imageUrlBuilder(
                              serviceIntro.attributes.featuredImage.data &&
                                serviceIntro.attributes.featuredImage.data
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
                          {serviceIntro.attributes.engagementTitle && (
                            <h3>{serviceIntro.attributes.engagementTitle}</h3>
                          )}
                          {serviceIntro.attributes.engagementDescription && (
                            <p>
                              {serviceIntro.attributes.engagementDescription}
                            </p>
                          )}

                          {serviceIntro.attributes.engagementBullets && (
                            <Accordion preExpanded={firstBulletUUID}>
                              {serviceIntro.attributes.engagementBullets.data.map(
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
                          {/* {serviceIntro.secDescription && (
                            <p className="pt-3">
                              {serviceIntro.secDescription}
                            </p>
                          )} */}
                          <div className="mt-4">
                            <GreenButton
                              name="Learn More"
                              route="/contact-us"
                            />
                          </div>
                        </div>
                      </Col>
                    </>
                  ) : (
                    <div className="">
                      <Row>
                        <Col lg={6} className="my-3 ">
                          <div className="services_content">
                            {serviceIntro.attributes.engagementTitle && (
                              <h3>{serviceIntro.attributes.engagementTitle}</h3>
                            )}
                            {serviceIntro.attributes.engagementDescription && (
                              <p>
                                {serviceIntro.attributes.engagementDescription}
                              </p>
                            )}
                            {serviceIntro.attributes.engagementBullets && (
                              <Accordion preExpanded={firstBulletUUID}>
                                {serviceIntro.attributes.engagementBullets.data.map(
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
                            {/* {serviceIntro.secDescription && (
                              <p className="pt-3">
                                {serviceIntro.secDescription}
                              </p>
                            )} */}
                            <div className="mt-4">
                              <GreenButton
                                name="Learn More"
                                route="/contact-us"
                              />
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
                                serviceIntro.attributes.featuredImage.data &&
                                  serviceIntro.attributes.featuredImage.data
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
                    // </>
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

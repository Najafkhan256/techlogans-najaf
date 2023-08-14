"use client";
import { ServicesData } from "@/data";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "../greenButton";
import OutlineButton from "../outlineButton";
import { fetchData } from "@/utils/api";
import Image from "next/image";
import imageUrlBuilder from "@/utils/imageUrl";

const OurServices = () => {
  const [ourServicesData, setOurServicesData] = useState(null);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const apiUrl = "/our-services";
        const responseData = await fetchData(apiUrl);
        setOurServicesData(responseData);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServicesData();
  }, []);

  return (
    <div className="OurServices pt-5">
      <div className="OurServices-content">
        <h2>
          our <span>services</span>{" "}
        </h2>
      </div>
      <Container>
        <Row>
          {ourServicesData &&
            ourServicesData?.data?.slice(0, 4).map((service, index) => {
              return (
                <Col lg={3} md={6} sm={12} key={index} className="my-3">
                  <div className="card-wrap">
                    <div className="card-header">
                      <Image
                        src={imageUrlBuilder(
                          service.attributes.serviceIcon.data &&
                            service.attributes.serviceIcon.data.attributes.url
                        )}
                        height={80}
                        width={80}
                        alt="service icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="card-content">
                      <h1 className="card-title">
                        {service.attributes.serivceName}
                      </h1>
                      <p className="card-text">
                        {service.attributes.serviceDescription}
                      </p>
                      <div className="mt-2">
                        <GreenButton
                          name="Read more"
                          // route={service.buttonRoute}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
        <div className="d-flex justify-content-center mt-5">
          <OutlineButton name="Read more" route="services" />
        </div>
      </Container>
    </div>
  );
};

export default OurServices;

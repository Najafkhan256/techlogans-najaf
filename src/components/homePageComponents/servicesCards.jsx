import { ServicesData } from "@/data";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GreenButton from "../greenButton";
import { fetchData } from "@/utils/api";
import imageUrlBuilder from "@/utils/imageUrl";

const ServicesCards = () => {
  const [ourServicesData, setOurServicesData] = useState(null);

  console.log("ourServicesData", ourServicesData);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const apiUrl = "/our-services";
        const responseData = await fetchData(apiUrl);
        setOurServicesData(responseData.data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServicesData();
  }, []);

  return (
    <div className="light_background mt-5">
      <Container>
        <h2 className="popular_stacks">
          our <span> popular stacks</span>{" "}
        </h2>
        <Row>
          {ourServicesData &&
            ourServicesData?.map((service, index) => {
              return (
                <Col lg={3} md={6} sm={12} key={index} className="my-3">
                  <div className="card-wrap">
                    <div className="card-header">
                      <img
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
                        {" "}
                        {service.attributes.serivceName}
                      </h1>
                      <p className="card-text">
                        {" "}
                        {service.attributes.serviceDescription}
                      </p>
                      <div className="mt-2">
                        <GreenButton
                          name="Read more"
                          route="/contact-us"
                          // route={"services/" + service.title}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesCards;

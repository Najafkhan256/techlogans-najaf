"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OutlineButton from "../outlineButton";
import { fetchData } from "@/utils/api";

// const WhatWeCanDoData = [
//   {
//     title: "MVP",
//     description:
//       "You are launching a new digital product, you need an MVP built fast, and done right.",
//     animationName: "zoom-in",
//     animationDuration: "1000",
//   },
//   {
//     title: "Modernization",
//     description:
//       "You have an existing digital product that no longer meets internal and external demands, and must be modernized.",
//     animationName: "zoom-in",
//     animationDuration: "1500",
//   },
//   {
//     title: "Integration",
//     description:
//       "You have a number of disparate and disconnected business functions that require manual labor, at a cost to your business.",
//     animationName: "zoom-in",
//     animationDuration: "2000",
//   },
//   {
//     title: "Expertise",
//     description:
//       "Your team lacks specialized expertise, e.g. Serverless, Microservices, React, etc.",
//     animationName: "zoom-in",
//     animationDuration: "2500",
//   },
//   {
//     title: "Scale",
//     description:
//       "You have the team and expertise, you need to add reliable and expert on-demand capacity.",
//     animationName: "zoom-in",
//     animationDuration: "3000",
//   },
// ];

const WhatWeCanDo = () => {
  const [whatWeCanData, setWhatWeCanData] = useState(null);

  console.log("what we can do", whatWeCanData);

  useEffect(() => {
    const fetchWhatCanDoData = async () => {
      try {
        const apiUrl = "/what-we-can-dos";
        const responseData = await fetchData(apiUrl);
        setWhatWeCanData(responseData.data);
      } catch (error) {
        console.error("Error fetching what we can do data:", error);
      }
    };

    fetchWhatCanDoData();
  }, []);
  return (
    <div className="whatWeCanDo">
      <Container>
        <div className="title-container">
          <h2 className="section-title">
            What we can do <span> for you</span>
          </h2>
        </div>
        <div className="section-summary mb-5">
          Some scenarios we can help you with:
        </div>

        <div className="ag-format-container">
          <div className="ag-courses_box">
            <Row>
              {whatWeCanData &&
                whatWeCanData?.map((item, index) => {
                  return (
                    <Col lg={4} md={6} sm={12} className="" key={index}>
                      <div
                        className="ag-courses_item"
                        data-aos="zoom-in"
                        data-aos-duration={2000}
                      >
                        <div className="ag-courses-item_link">
                          <div className="ag-courses-item_bg"></div>
                          <div className="ag-courses-item_title">
                            {item.attributes.weCanTitle}
                          </div>
                          <div className="ag-courses-item_date-box">
                            {item.attributes.weCanDescription}
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </Container>
      <div className="d-flex justify-content-center my-5">
        <OutlineButton name="Learn More" route="/contact-us" />
      </div>
    </div>
  );
};

export default WhatWeCanDo;

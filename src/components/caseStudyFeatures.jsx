import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";

const CaseStudyFeatures = () => {
  const FeaturesList = [
    "Video & Live Streaming",
    "Video & Live Streaming",
    "Video & Live Streaming",
    "Video & Live Streaming",
    "Video & Live Streaming",
  ];
  return (
    <div className="caseStudyFeatures">
      <h2>Features:</h2>
      <Row>
        {FeaturesList.map((featureList, index) => {
          return (
            <Col lg={6} key={index}>
              <p>
                <BsFillCheckCircleFill />
                <span>{featureList}</span>
              </p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CaseStudyFeatures;

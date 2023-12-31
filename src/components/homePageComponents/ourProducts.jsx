"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MultiChannelImage from "@/images/Multi-channel.svg";
import CloudNativeImage from "@/images/Cloud-native.svg";
import ReliableImage from "@/images/Reliable.svg";
import SecureImage from "@/images/Secure.svg";
import CostEffectiveImage from "@/images/CostEffective.svg";
import Image from "next/image";
import { FaConnectdevelop } from "react-icons/fa";
import OutlineButton from "../outlineButton";
import { fetchData } from "@/utils/api";
import imageUrlBuilder from "@/utils/imageUrl";

const productsData = [
  {
    img: MultiChannelImage,
    title: "Multi-channel",
    description:
      "Functions available across multiple channels: web, mobile, API, wearable device, etc. ",
  },
  {
    img: CloudNativeImage,
    title: "Cloud-native ",
    description:
      "Built for the Cloud, not just in the Cloud (Serverless, Microservices, Containers, etc.). ",
  },
  {
    img: ReliableImage,
    title: "Reliable",
    description:
      "Built to last, scalable, resilient, and resistant to unpredictable operating conditions. ",
  },
  {
    img: SecureImage,
    title: "Secure",
    description:
      "Security as a feature, based on industry standards for architecture, risk assessment, and mitigation strategies. ",
  },
  {
    img: CostEffectiveImage,
    title: "Cost Effective ",
    description:
      "Designed for the lowest cost of operation, while meeting all business objectives. ",
  },
  //   {
  //     img: CostEffectiveImage,
  //     title: "Custom Development ",
  //     description:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking. ",
  //   },
];

const OurProducts = () => {
  const [ourProductData, setOurProductData] = useState(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const apiUrl = "/our-products";
        const responseData = await fetchData(apiUrl);
        setOurProductData(responseData);
      } catch (error) {
        console.error("Error fetching products data:", error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className=" light_background">
      <Container>
        <div className="product-components">
          <div className="title-container">
            <h2 className="section-title">
              Modern <span>Web Development</span>{" "}
            </h2>
          </div>
          <div className="section-summary mb-5">
            At Tech Logans we specialize in building digital products using
            modern web development. What are modern web apps? At Tech Logans we
            define the following criteria for modern web apps:
          </div>
          <Row>
            {ourProductData &&
              ourProductData?.data?.map((product, index) => {
                const isEvenColumn = index % 2 === 0;
                return (
                  <Col
                    lg={4}
                    md={6}
                    sm={12}
                    className={`${isEvenColumn ? "even-column" : "odd-column"}`}
                    key={index}
                  >
                    <div
                      className="product-icon"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                    >
                      <Image
                        src={imageUrlBuilder(
                          product?.attributes?.productImage.data.attributes.url
                        )}
                        alt={product?.title}
                        height={60}
                        width={60}
                      />
                    </div>

                    <h2 className="text-center section-column-title my-4">
                      {product?.attributes?.productName}
                    </h2>
                    <div className="productDescription">
                      {product?.attributes?.productDescription}
                    </div>
                  </Col>
                );
              })}
            <Col lg={4} md={6} sm={12} className="odd-column">
              <div
                className="product-icon"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <FaConnectdevelop size={60} className="developement" />
              </div>
              <h2 className="text-center section-column-title my-4">
                Custom Development
              </h2>
              <div className="section-summary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking.
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center py-md-5">
          <OutlineButton name="Learn more" route="/contact-us" />
        </div>
      </Container>
    </div>
  );
};

export default OurProducts;

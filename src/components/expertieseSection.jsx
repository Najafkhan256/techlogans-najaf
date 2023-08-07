"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import expertiesImage from "@/images/expertiese.svg";
import meetingImage from "@/images/meeting.png";
import hiringDeveloper from "@/images/hiring-developer.png";
import bugImage from "@/images/bug.png";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const ExpertieseData = [
  {
    title: "Consulting Your Startup Plans",
    img: meetingImage,
    desc: "Our team offers aid in landing your startup plans in success. Discuss your plans with us and we will help you successfully realize them. We ensure keeping your plans secret and safe.",
    bgColor: "#fcdde1",
    animationName: "fade-left",
    animationDuration: 2000,
  },
  {
    title: "Hiring Developers for your Project",
    img: hiringDeveloper,
    desc: "We provide cost-effective expert developers who are time efficient and believe in results. Our experts provide services that are scalable and fulfill your need for developers according to your growing requirements.",
    bgColor: "#5cc9a7",
    animationName: "fade-left",
    animationDuration: 2000,
  },
  {
    title: "Bug Fixes and Enhancing the Pre-existing Code",
    img: bugImage,
    desc: "Our teams not only aid in developing new software but also help in fixing bugs. We will also enhance the pre-existing code to ensure that it performs well.",
    bgColor: "#ffc226",
    animationName: "fade-left",
    animationDuration: 3000,
  },
];

const ExpertieseSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <div className="our-expertiese-section">
        <div className="title-container">
          <h2 className="section-title">
            <span>Our expertise</span>in all technologies
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {ExpertieseData &&
              ExpertieseData.map(
                ({
                  title,
                  img,
                  desc,
                  bgColor,
                  index,
                  animationName,
                  animationDuration,
                }) => {
                  return (
                    <div
                      className="media my-4"
                      key={index}
                      data-aos={animationName}
                      data-aos-duration={animationDuration}
                    >
                      <div
                        className="expertiese_bullet_image"
                        style={{ backgroundColor: `${bgColor}` }}
                      >
                        <Image
                          src={img}
                          className="mr-3"
                          alt={title}
                          height={40}
                          width={40}
                        />
                      </div>

                      <div className="media-body">
                        <h5 className="mt-0">{title}</h5>
                        <p>{desc}</p>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
          <div className="col-lg-6">
            <div
              className="experties-img-container"
              data-aos="fade-down-left"
              data-aos-duration="2000"
            >
              <Image
                src={expertiesImage}
                alt={`Tech Logans - Expertiese`}
                height={400}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExpertieseSection;

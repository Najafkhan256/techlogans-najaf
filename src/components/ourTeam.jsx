"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamOne from "@/images/staff/muharrem.webp";
import TeamCover from "@/images/background/team-cover.png";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TeamData } from "@/data";
import { fetchData } from "@/utils/api";
import Skeleton from "react-loading-skeleton";
import imageUrlBuilder from "@/utils/imageUrl";

const OurTeam = () => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const apiUrl = "/our-teams";
        const responseData = await fetchData(apiUrl);
        setTeamData(responseData);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="team_view">
      <h2>
        our <span>team</span>
      </h2>
      <Container className="my-5 ">
        <Row>
          {teamData
            ? teamData &&
              teamData.data?.map((team, index) => {
                console.log("team..", team);
                return (
                  <Col lg={3} md={6} sm={6} key={index}>
                    <div className="our-team">
                      <div className="pic">
                        <img
                          src={imageUrlBuilder(
                            team.attributes.teamImage.data &&
                              team.attributes.teamImage.data.attributes.url
                          )}
                          // src={TeamOne}
                          classNam="img-fluid"
                          height={300}
                          width={300}
                          alt="team one"
                        />
                      </div>
                      <div className="team-content">
                        <h3 className="title">{team.attributes.teamName}</h3>
                        <span className="post">
                          {team.attributes.teamDesignation}
                        </span>
                      </div>
                      <ul className="social">
                        <li>
                          <Link href="/">
                            <FaFacebookF size={20} />
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <FaLinkedinIn size={20} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                );
              })
            : Array.from({ length: 4 }).map((_, index) => (
                <Col lg={3} md={6} sm={6} key={index}>
                  <div className="our-team">
                    <div className="pic">
                      <Skeleton
                        circle
                        height="100%"
                        containerClassName="avatar-skeleton"
                      />
                    </div>
                    <div className="team-content mx-3">
                      <h3 className="title">
                        <Skeleton />
                      </h3>
                      <span className="post">
                        <Skeleton />
                      </span>
                    </div>
                    <ul className="social">
                      <li>
                        <Link href="/">
                          <Skeleton />
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <Skeleton />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              ))}

          {/* <Col md={3} sm={6}>
          <div className="our-team">
            <div className="pic">
              <Image
                src={TeamOne}
                classNam="img-fluid"
                height={300}
                width={300}
                alt="team one"
              />
            </div>

            <h3 className="title">Kristiana</h3>

            <span className="post">Web Designer</span>
            <ul className="social">
              <li>
                <Link href="/">
                  <FaFacebookF size={20} />
                </Link>
              </li>

              <li>
                <Link href="/">
                  <FaInstagram />
                </Link>
              </li>

              <li>
                <Link href="/">
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>
        </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;

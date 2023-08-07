"use client";
import React from "react";
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

const OurTeam = () => {
  return (
    <div className="team_view">
      <h2>
        our <span>team</span>
      </h2>
      <Container className="my-5 ">
        <Row>
          {TeamData &&
            TeamData?.map((team, index) => {
              return (
                <Col lg={3} md={6} sm={6} key={index}>
                  <div className="our-team">
                    <div className="pic">
                      <Image
                        src={team.profileImage}
                        classNam="img-fluid"
                        height={300}
                        width={300}
                        alt="team one"
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="title">{team.name}</h3>
                      <span className="post">{team.designation}</span>
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
            })}

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

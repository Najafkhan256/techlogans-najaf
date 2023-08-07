"use client";
import React from "react";
import FooterLogo from "@/images/tech_logans_white.webp";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import SocialLinks from "./socialLinks";
import LocationIcon from "@/images/icons/location-ico.png";
import TelephoneIcon from "@/images/icons/phone-ico.png";
import EmailIcon from "@/images/icons/mail-ico.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import GreenButton from "@/components/greenButton";

// twitter: "https://twitter.com/polymathlabz",
//     facebook: "https://www.facebook.com/techlogans/",
//     linkedin: "https://www.linkedin.com/company//tech-logans",
//     instagram: "https://www.instagram.com/tech.logans",

const Footer = () => {
  return (
    <footer className="footer-area footer--light">
      <div className="footer-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget">
                <div className="widget-about">
                  <Image
                    src={FooterLogo}
                    alt="Tech Logans logo"
                    className="img-fluid"
                  />
                  <p>
                    We use a proven global delivery model to reduce and
                    eliminate challenges often tied to other offshore web
                    development practices. Our global delivery model allows
                    flexibility for customers to adapt to our solutions to their
                    day-to-day problems
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title">useful links</h4>
                  <ul className="navigation">
                    <li className="mb-2">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/abouts">About</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/service">Services & Competencies</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/">Our Work</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h4 className="footer-widget-title">SERVICES</h4>
                  <ul>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Mobile Development</a>
                    </li>
                    <li>
                      <a href="#">AI/ML</a>
                    </li>
                    <li>
                      <a href="#">DevSecOps</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu no-padding">
                  <h4 className="footer-widget-title">SOCIAL LINKS</h4>
                  <ul className="social_links">
                    <li>
                      <Image src={LocationIcon} height={25} width={25} />
                      <Link
                        href="https://goo.gl/maps/7sfHVDBVhs6xCT6W8"
                        target="_blank"
                      >
                        Pakistan
                      </Link>
                    </li>
                    <li>
                      <Image src={TelephoneIcon} height={25} width={25} />
                      <Link href="tel:+923450799900">+923450799900</Link>
                    </li>
                    <li>
                      <Image src={EmailIcon} height={20} width={30} />
                      <Link href="mailto:info@techlogans.com">
                        info@techlogans.com
                      </Link>
                    </li>
                  </ul>
                  <ul className="social_icons">
                    <li>
                      <Link
                        href="https://www.facebook.com/techlogans/"
                        target="_blank"
                      >
                        <FaFacebookSquare size={30} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company//tech-logans"
                        target="_blank"
                      >
                        <FaLinkedin size={30} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/tech.logans"
                        target="_blank"
                      >
                        <FaInstagramSquare size={30} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/polymathlabz"
                        target="_blank"
                      >
                        <FaTwitterSquare size={30} />
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-5">
                    <GreenButton name="contact us" route="contact-us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="row">
          <div className="col-md-12">
            <div
              className="text-center md:p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
            >
              <p>
                &copy; Copyright {new Date().getFullYear()}
                <Link href="/" className="brand">
                  Tech Logans
                </Link>
                - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

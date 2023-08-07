"use client";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { InlineWidget } from "react-calendly";
import PhoneIcon from "../images/icons/phone-ico.png";
import MailIcon from "../images/icons/mail-ico.png";
import LocationIcon from "../images/icons/location-ico.png";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkneraa");
  if (state.succeeded) {
    return <p>We will send you further steps. Thanks for the information.</p>;
  }

  return (
    <div className="contact_Form">
      <form onSubmit={handleSubmit}>
        <Container>
          <div className="row">
            <div className="col-md-12 pb-5">
              <h1 className="submit-form-title">
                Schedule <span> a Meeting</span>
              </h1>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {/* <div className="col-md-6"> */}
                <iframe
                  src="https://calendly.com/ishtiaq-bhatti/30min"
                  width="100%"
                  height="600px"
                  // frameBorder="0"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 sidebar py-5">
              <div className="col-md-12 pb-3 mb-md-4 pl-md-1">
                <h1 className="info-section-title">Contact Information</h1>
              </div>
              <div className="contact_information">
                <div>
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
                      <Image src={PhoneIcon} height={25} width={25} />
                      <Link href="tel:+923450799900">+923450799900</Link>
                    </li>
                    <li>
                      <Image src={MailIcon} height={20} width={30} />
                      <Link href="mailto:owner@techlogans.com">
                        info@techlogans.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="">
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </form>
    </div>
  );
}

export default ContactForm;

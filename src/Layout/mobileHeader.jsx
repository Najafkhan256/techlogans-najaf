import GreenButton from "@/components/greenButton";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const MobileHeader = ({ pathname }) => {
  return (
    <div className="mobileHeader">
      <Container>
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              about
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className={
                pathname === "/services" || pathname.includes("/services")
                  ? "active"
                  : ""
              }
            >
              services & competencies
            </Link>
          </li>
          <li>
            <Link
              href="/all-case-studies"
              className={
                pathname === "/all-case-studies" ||
                pathname.includes("/all-case-studies")
                  ? "active"
                  : ""
              }
            >
              our work
            </Link>
          </li>
          <div className="d-flex justify-content-end">
            <GreenButton name="contact us" route="contact-us" />
          </div>
        </ul>
      </Container>
    </div>
  );
};

export default MobileHeader;

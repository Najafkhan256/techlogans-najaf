"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Logo from "@/images/tech_logans_white.webp";
import Link from "next/link";
import GreenButton from "@/components/greenButton";
import { usePathname } from "next/navigation";
import ToggleButton from "@/components/toggleButton";
import MobileHeader from "./mobileHeader";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);
  const pathname = usePathname();

  console.log(pathname, "path name");

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <div className={navbar ? "navbar bg-brandColor" : "navbar"}>
        <Container>
          <div className="navbarBrand">
            <Link href="/">
              <Image src={Logo} height={53} width={255} alt="logo" />
            </Link>
          </div>
          <div className="navbarLinks">
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
            </ul>
          </div>

          <div className="navbarToggleButton">
            <ToggleButton
              toggleActive={toggleActive}
              setToggleActive={setToggleActive}
            />
          </div>
          <div className="navbarButton">
            <GreenButton name="contact us" route="contact-us" />
          </div>
        </Container>
      </div>
      {toggleActive && (
        <div>
          <MobileHeader pathname={pathname} />
        </div>
      )}
    </>
  );
};

export default Header;

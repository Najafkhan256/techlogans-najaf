import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import PhoneIcon from "../images/icons/phone-ico.png";
import MailIcon from "../images/icons/mail-ico.png";
import LocationIcon from "../images/icons/location-ico.png";

const Map = () => {
  return (
    <div className="map">
      <Container>
        <div className="map_location">
          <ul>
            <li>
              <Image src={LocationIcon} height={40} width={40} />
              <Link
                href="https://goo.gl/maps/7sfHVDBVhs6xCT6W8"
                target="_blank"
              >
                Pakistan
                {/* <p>
                  Flat 08, University, Mall of Sargodha, Rd, Pir Muhammad
                  Colony, Sargodha, Punjab 63350
                </p> */}
              </Link>
            </li>
            <li>
              <Image src={PhoneIcon} height={40} width={40} />
              <Link href="tel:+923450799900">+923450799900</Link>
            </li>
            <li>
              <Image src={MailIcon} height={35} width={45} />
              <Link href="mailto:owner@techlogans.com">
                info@techlogans.com
              </Link>
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.231822131968!2d72.69124847660483!3d32.06297807397016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177b2720ba735%3A0xcc4b98a3cc7d071a!2sTech%20Logans!5e0!3m2!1sen!2s!4v1690981893596!5m2!1sen!2s"
          height="450"
          style={{
            border: 0,
            width: "100%",
            borderRadius: "0px 0px 12px 12px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </div>
  );
};

export default Map;

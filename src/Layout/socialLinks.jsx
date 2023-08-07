import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const SocialLinks = () => {
  const links = {
    url: process.env.GATSBY_PLWEB_WEB_ADDRESS,
    twitter: "https://twitter.com/polymathlabz",
    facebook: "https://www.facebook.com/techlogans/",
    linkedin: "https://www.linkedin.com/company//tech-logans",
    instagram: "https://www.instagram.com/tech.logans",
  };

  return (
    <div className="social-links-component">
      <ul className="list-inline social-list">
        <li className="list-inline-item pr-1">
          <a href={links.facebook} target="_new">
            <FaFacebookSquare color="white" size={24} />
          </a>
        </li>
        {/* <li className="list-inline-item pr-1">
                <a href={links.twitter} target="_new">
                    <img
                        className="social-icons"
                        src={TwitterIcon}
                        alt={`Twitter link`}
                    />
                </a>
            </li> */}
        <li className="list-inline-item pr-1">
          <a href={links.linkedin} target="_new">
            <FaLinkedin color="white" size={24} />
          </a>
        </li>
        <li className="list-inline-item">
          <a href={links.instagram} target="_new">
            <FaInstagramSquare color="white" size={24} />
          </a>
        </li>
      </ul>
      <span itemScope itemType="http://schema.org/Organization">
        <link itemProp="url" href={links.url} />
        <a itemProp="sameAs" href={links.linkedin}>
          LinkedIn
        </a>
        <a itemProp="sameAs" href={links.twitter}>
          Twitter
        </a>
        <a itemProp="sameAs" href={links.facebook}>
          Facebook
        </a>
      </span>
      <button type="button" className="btn-contact-us">
        <Link href="/contect">Contact Us</Link>
      </button>
    </div>
  );
};

export default SocialLinks;

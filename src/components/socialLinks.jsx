import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social__Links">
      <ul>
        <li>
          <Link href="https://www.facebook.com/techlogans" target="_blank">
            <FaFacebookF size={24} />
          </Link>
        </li>
        <li>
          <Link href="/" target="_blank">
            <FaTwitter size={24} />
          </Link>
        </li>
        <li>
          <Link
            href="/https://www.linkedin.com/company/tech-logans"
            target="_blank"
          >
            <FaLinkedinIn size={24} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;

import Link from "next/link";
import React from "react";

const GreenButton = ({ name, route }) => {
  return (
    <Link href={`/${route}`} className="greenButton">
      {name}
    </Link>
  );
};

export default GreenButton;

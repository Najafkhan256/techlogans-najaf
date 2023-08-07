import React from "react";
import Link from "next/link";

const OutlineButton = ({ name, route }) => {
  return (
    <Link href={`/${route}`} className="outlineButton">
      {name}
    </Link>
  );
};

export default OutlineButton;

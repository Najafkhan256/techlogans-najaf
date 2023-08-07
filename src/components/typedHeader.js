import React from "react";
import Typed from "typed.js";

const TypedHeader = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Modern Web App Developer",
        "Your Offshore Web Development Partners",
        "Always on Time",
        "Tech Logans!",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypedHeader;

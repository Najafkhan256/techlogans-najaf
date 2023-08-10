import { fetchData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";

const TypedHeader = () => {
  const [typedData, setTypedData] = useState(null);
  const el = React.useRef(null);


  useEffect(() => {
    const fetchTypedData = async () => {
      try {
        const apiUrl = "/typeds";
        const responseData = await fetchData(apiUrl);
        setTypedData(responseData);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTypedData();
  }, []);

  useEffect(() => {
    if (
      typedData &&
      typedData.data &&
      typedData.data[0]?.attributes?.typedData
    ) {
      const nameArray = typedData.data[0].attributes.typedData.data.map(
        (item) => item.name
      );

      const typed = new Typed(el.current, {
        strings: nameArray,
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, [typedData]);

  return <span ref={el} />;
};

export default TypedHeader;

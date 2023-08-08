import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const MediaObject = () => {
  return (
    <div className="media_object">
      <div className="media_object_wrapper">
        <div className="flex-shrink-0 mb-3">
          <div className="image_wrapper">
            <BiPhoneCall />
          </div>
        </div>
        <div className="flex-grow-1 ms-md-3">
          <h3>One to one video call and live streaming</h3>
          <p>
            This is some content from a media component. You can replace this
            with any content and adjust it as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaObject;

"use client";
import React from "react";
import { Container } from "react-bootstrap";

const Banner = (props) => {
  return (
    <div className="banner-component">
      <Container>
        <h1
          className="title"
          dangerouslySetInnerHTML={{ __html: props.title || props.name }}
        />
        {props.children}
      </Container>
    </div>
  );
};

export default Banner;

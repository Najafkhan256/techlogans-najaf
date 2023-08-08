"use client";
import React from "react";
import { Container } from "react-bootstrap";

const Banner = (props) => {
  return (
    <div className="banner-component">
      <Container>
        <p className="span">{props.span}</p>

        <h1
          className="title"
          dangerouslySetInnerHTML={{ __html: props.title || props.name }}
        />
        {props.subtitle && <p className="subtitle">{props.subtitle}</p>}

        {props.children}
      </Container>
    </div>
  );
};

export default Banner;

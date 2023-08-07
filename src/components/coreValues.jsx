import { coreValuesData } from "@/data";
import Image from "next/image";
import React from "react";

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="container">
        <div className="title-container">
          <h2 className="section-title">
            Core <span>Values</span>
          </h2>
        </div>
        <div className="section-summary">
          <p className="paragraph">
            Our values define everything we do here at Tech Logans
          </p>
        </div>
        <div className="row">
          {coreValuesData &&
            coreValuesData.map((coreValue, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0"
              >
                <div className="card-wrapper">
                  <div className="row">
                    <div className="col-lg-12 mb-3 d-flex d-md-block justify-content-center">
                      <div className="img-wrapper">
                        <Image
                          src={coreValue.icon}
                          alt="core icons"
                          height={45}
                          width={55}
                        />
                      </div>
                    </div>
                    <div className="col-12 card-title d-flex d-md-block justify-content-center">
                      <h4>{coreValue.title}</h4>
                    </div>
                    <div className="col-12 card-paragraph d-flex d-md-block justify-content-center">
                      <p>{coreValue.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

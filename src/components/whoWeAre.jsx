import React from "react";

const WhoWeAre = () => {
  return (
    <section className="about-us-section pt-4 text-center">
      <div className="container mt-3 text-center">
        <div className="title-container text-center">
          <h2
            className="section-title about-us-title text-center"
            style={{ textAlign: "center" }}
          >
            WE ARE <span>TECHNOLOGISTS</span>
          </h2>
        </div>
        <div className="about-us-description-wrapper">
          <div className="row">
            <div className="col-12 pt-4">
              <p className="section-summary">
                We are technologists and love technology. We believe that
                technology has and will continue to improve our lives. But we
                also believe that technology can be misunderstood, incorrectly
                implemented, and become the source of pain. Our mission is to
                help companies get the best of what technology has to offer. We
                believe that technology is done right is cheaper, can be
                implemented faster, and will serve and empower businesses. Doing
                technology right requires experience, deep expertise, and
                multi-domain knowledge. We believe that technology done right
                requires Tech Logans. Contact us to learn what we can do for
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

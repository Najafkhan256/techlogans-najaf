import React from "react";
import MicheleScaggiante from "@/images/icons/Michele_Scaggiante.png";
import Image from "next/image";
import JasonFanImg from "@/images/icons/Jason_Fan.png";

const Testimonials = () => {
  return (
    <div className="testimonials-component">
      <div className="testimonials_content">
        <h2>Testimonials</h2>
        <p>Our clients love us:</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 pb-3 pb-md-0">
            <div className="card shadow">
              <div className="row">
                <div className="col-12">
                  <p className="paragraph-with-quotes">
                    We sought the help of Tech Logans in developing a custom
                    Portal to complement our Enterprise Data Analytics
                    initiative. Tech Logans delivered complex modules across
                    business domains, collaborated with our internal IT teams,
                    implemented Agile and DevOps processes - all with a lean
                    budget.
                  </p>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Image src={MicheleScaggiante} alt="Michele Scaggiante" />
                  </li>
                  <li className="list-inline-item">
                    <p className="author-title">Michele Scaggiante</p>
                    <p className="author-position">
                      VP and CIO of New York Blood Center
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pb-3 pb-md-0">
            <div className="card shadow">
              <div className="row">
                <div className="col-12">
                  <p className="paragraph-with-quotes">
                    The Tech Logans team was able to quickly grasp our product
                    vision and goal to build something fast and lean that
                    matches our immediate product goals. Tech Logans is perfect
                    for those that need a scaled team fast.
                  </p>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Image src={JasonFanImg} alt="Michele Scaggiante" />
                  </li>
                  <li className="list-inline-item">
                    <p className="author-title">Jason Fan</p>
                    <p className="author-position">
                      Co-Founder, CEO of BrainCeek
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

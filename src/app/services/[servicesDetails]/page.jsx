"use client";
import React from "react";
import Layout from "@/Layout";
import Banner from "@/components/Banner";
import ServicesCards from "@/components/homePageComponents/servicesCards";
import ContactForm from "@/components/contactForm";
import Map from "@/components/map";
// import { AllPorjectsData } from "@/data";

const AllCaseStudyDetails = ({ params }) => {
  const serviceTitle = decodeURIComponent(params.servicesDetails);

  // const selectedProject = AllPorjectsData.find(
  //   (project) =>
  //     project.title.toLowerCase() === serviceTitle.toLocaleLowerCase()
  // );

  // console.log("selectedProject----", selectedProject);

  // if (!selectedProject) {
  //   return (
  //     <Layout>
  //       <Banner name="Services Details" />
  //       <div>
  //         <h2>Project not found.</h2>
  //       </div>
  //       <ContactForm />
  //       <Map />
  //     </Layout>
  //   );
  // }

  return (
    <Layout>
      <Banner name="Services Details" />
      <div className="service_details">
        <h2>{serviceTitle}</h2>
        {/* <p>{selectedProject.description}</p> */}
      </div>
    </Layout>
  );
};

export default AllCaseStudyDetails;

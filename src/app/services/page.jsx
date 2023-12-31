"use client";
import Layout from "@/Layout";
import Banner from "@/components/Banner";
import ContactForm from "@/components/contactForm";
import ServicesCards from "@/components/homePageComponents/servicesCards";
import Map from "@/components/map";
import OurBrands from "@/components/ourBrands";
import ServiceIntro from "@/components/serviceIntro";

export default function Services() {
  return (
    <Layout>
      <div className="services-view">
        <Banner title="Our <span>Services</span> " />
        <ServiceIntro />
        <OurBrands />
      </div>
    </Layout>
  );
}

"use client";
import Layout from "@/Layout";
import Banner from "@/components/Banner";
import ContactForm from "@/components/contactForm";
import EngagementModal from "@/components/engagementModal";
import ServicesCards from "@/components/homePageComponents/servicesCards";
import Map from "@/components/map";
import OurBrands from "@/components/ourBrands";
import ServiceIntro from "@/components/serviceIntro";

export default function EngagementModalPage() {
  return (
    <Layout>
      <div className="services-view">
        <Banner
          title="Engagement <span> Modal</span> "
          subtitle="See how you can work with Tech Logans to build better technology."
        />
        <EngagementModal />
      </div>
    </Layout>
  );
}

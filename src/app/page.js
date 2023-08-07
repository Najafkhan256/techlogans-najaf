import Layout from "@/Layout";
import ContactForm from "@/components/contactForm";
import CTA from "@/components/cta";
import ExpertieseSection from "@/components/expertieseSection";
import BriefIntro from "@/components/homePageComponents/briefIntro";
import HomeBanner from "@/components/homePageComponents/homeBanner";
import OurProducts from "@/components/homePageComponents/ourProducts";
import OurServices from "@/components/homePageComponents/ourServices";
import Testimonials from "@/components/homePageComponents/testimonials";
import WhatWeCanDo from "@/components/homePageComponents/whatWeCanDo";
import Map from "@/components/map";

export default function Home() {
  return (
    <Layout>
      <HomeBanner />
      <BriefIntro />
      <ExpertieseSection />
      <OurProducts />
      <OurServices />
      <CTA />
      <WhatWeCanDo />
      <Testimonials />
      <ContactForm />
      <Map />
    </Layout>
  );
}

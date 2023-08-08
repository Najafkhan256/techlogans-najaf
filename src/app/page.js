"use client";
import Layout from "@/Layout";
import CaseStudySlider from "@/components/caseStudySlider";
import CTA from "@/components/cta";
import ExpertieseSection from "@/components/expertieseSection";
import BriefIntro from "@/components/homePageComponents/briefIntro";
import HomeBanner from "@/components/homePageComponents/homeBanner";
import OurProducts from "@/components/homePageComponents/ourProducts";
import OurServices from "@/components/homePageComponents/ourServices";
import Testimonials from "@/components/homePageComponents/testimonials";
import WhatWeCanDo from "@/components/homePageComponents/whatWeCanDo";

export default function Home() {
  return (
    <Layout>
      <HomeBanner />
      <BriefIntro />
      <CaseStudySlider />
      <ExpertieseSection />
      <OurProducts />
      <OurServices />
      <CTA />
      <WhatWeCanDo />
      <Testimonials />
    </Layout>
  );
}

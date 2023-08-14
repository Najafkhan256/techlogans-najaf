"use client";
import Layout from "@/Layout";
import Banner from "@/components/Banner";
import CoreValues from "@/components/coreValues";
import OurMission from "@/components/ourMission";
import OurTeam from "@/components/ourTeam";
import WhoWeAre from "@/components/whoWeAre";

export default function AboutPage() {
  return (
    <Layout>
      <div className="about-view">
        <Banner title="About <span>us</span> " />
        <WhoWeAre />
        <OurMission />
        <OurTeam />
        <CoreValues />
      </div>
    </Layout>
  );
}

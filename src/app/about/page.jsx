import Layout from "@/Layout";
import Banner from "@/components/Banner";
import ContactUs from "@/components/contactUs";
import CoreValues from "@/components/coreValues";
import Map from "@/components/map";
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
        <ContactUs />
        <Map />
      </div>
    </Layout>
  );
}

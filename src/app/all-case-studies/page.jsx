import Layout from "@/Layout";
import Banner from "@/components/Banner";
import ContactForm from "@/components/contactForm";
import OurWork from "@/components/ourWork";

export default function OurWorkPage() {
  return (
    <Layout>
      <Banner name="Work <span> We Are Proud Of </span>" />
      <OurWork />
      <ContactForm />
    </Layout>
  );
}

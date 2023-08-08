import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "@/components/contactForm";
import Map from "@/components/map";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
};

export default Layout;

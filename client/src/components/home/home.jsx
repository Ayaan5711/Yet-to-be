import React from "react";
import Layout from "../layout/layout";
import Banner from "../banner/banner";
import AppointmentForm from "../appointment/appointment";
import AboutSection from "../about/about";
import ServicesSection from "../service/service";
import BlogSection from "../blog/blog";

const Landing = () => {
  return (
    <Layout>
      <Banner />
      <AppointmentForm />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
    </Layout>
  );
};

export default Landing;

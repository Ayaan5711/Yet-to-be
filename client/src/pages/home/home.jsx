import React from "react";

import AboutSection from "@/components/about/about";
import Layout from "@/components/layout/layout";
import Banner from "@/components/banner/banner";
import AppointmentForm from "@/components/appointment/appointment";
import ServicesSection from "@/components/service/service";
import BlogSection from "@/components/blog/blogSection";

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

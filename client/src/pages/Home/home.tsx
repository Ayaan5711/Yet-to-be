import type React from "react";
import Layout from "../../components/layout/layout";
import Banner from "../../components/about/about";
import AppointmentForm from "../../components/appointment/appointment";
import AboutSection from "../../components/about/about";
import ServicesSection from "../../components/service/service";
import BlogSection from "../../components/blog/blog";

const Landing: React.FC = () => {
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

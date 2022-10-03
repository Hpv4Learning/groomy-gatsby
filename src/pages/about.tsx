import React from "react";
import { Layout } from "../components/layout/Layout";
import AboutHero from "../feature/about/AboutHero";
import { ReviewSection } from "../feature/about/ReviewSection";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <ReviewSection />
    </Layout>
  );
};

export default About;

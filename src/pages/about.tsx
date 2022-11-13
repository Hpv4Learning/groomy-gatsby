import { graphql, HeadFC } from "gatsby";
import React from "react";
import { Layout } from "../components/layout/Layout";
import AboutHero from "../feature/about/AboutHero";
import { ReviewSection } from "../feature/about/ReviewSection";
import { LinkHandler, MetaDecorator } from "../feature/seo/components";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <ReviewSection />
    </Layout>
  );
};

export const Head: HeadFC<Queries.AboutUsImageQuery> = ({ data }) => {
  return (
    <>
      <MetaDecorator
        metaTitle={"Chi sono i Groomy Chef"}
        metaDescription='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        image={data.file?.publicURL}
      />
      <LinkHandler />
    </>
  );
};

export const query = graphql`
  query AboutUsImage {
    file(relativePath: { eq: "about.jpeg" }) {
      publicURL
    }
  }
`;

export default About;

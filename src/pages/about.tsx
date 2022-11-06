import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../components/layout/Layout";
import AboutHero from "../feature/about/AboutHero";
import { ReviewSection } from "../feature/about/ReviewSection";
import { MetaDecorator } from "../feature/seo/components";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <ReviewSection />
    </Layout>
  );
};

export const Head: HeadFC<PageProps<Queries.AboutUsImageQuery>> = ({
  data,
}) => {
  return (
    <>
      <MetaDecorator
        image={data.data.file?.publicURL || undefined}
        metaTitle='Chi sono i Groomy Chefs ?'
        disableSlogan
      />
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

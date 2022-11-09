import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../components/layout/Layout";
import AboutHero from "../feature/about/AboutHero";
import { ReviewSection } from "../feature/about/ReviewSection";
import {
  LinkHandler,
  MetaDecorator,
  WebPageSchema,
} from "../feature/seo/components";
import { useSiteMetadata } from "../feature/seo/hooks";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <ReviewSection />
    </Layout>
  );
};

const BREADCRUMBS = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Chi Siamo",
    link: "/about-us/",
  },
];

export const Head: HeadFC<Queries.AboutUsImageQuery> = ({ data }) => {
  const { siteUrl } = useSiteMetadata() || {};
  return (
    <>
      <MetaDecorator
        image={data.file?.publicURL || undefined}
        metaTitle='Chi sono i Groomy Chefs ?'
        disableSlogan
      />
      <LinkHandler />
      <WebPageSchema
        breadcrumbs={BREADCRUMBS}
        image={
          data.file?.publicURL
            ? `${siteUrl}/${data.file?.publicURL}`
            : undefined
        }
        metaTitle='Chi sono i Groomy Chefs ?'
        type='AboutPage'
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

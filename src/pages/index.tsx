import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/layout/Layout";
import HomeHero from "../feature/home/HomeHero";
import { Container } from "../components";
import { RecipeMenu } from "../feature/home/RecipeMenu";
import ReacipeSection from "../feature/home/ReacipeSection";

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <div className='spacer-xxxl'>
        <Container>
          <RecipeMenu />
        </Container>
      </div>
      <div className='spacer-xxxl'>
        <Container>
          <ReacipeSection />
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <meta httpEquiv='content-language' content={`it`} />
    <meta
      name='description'
      content='Il miglior ricettario per giovani viaggiatori culinari'
    />
    <meta property='og:title' />
    <meta property='og:description' />
    <meta property='og:type' />
    <meta property='twitter:card' />
    <meta property='twitter:creator' />
    <meta property='twitter:title' />
    <meta property='twitter:description' />
    <meta property='og:image' />
    <meta property='og:image:width' />
    <meta property='og:image:height' />
    <meta property='twitter:card' />
  </>
);

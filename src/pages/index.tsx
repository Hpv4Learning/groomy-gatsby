import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/layout/Layout";
import HomeHero from "../feature/home/HomeHero";
import { Container } from "../components";
import { RecipeMenu } from "../feature/home/RecipeMenu";
import ReacipeSection from "../feature/home/ReacipeSection";
import { MetaDecorator } from "../feature/seo/components";

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
    <MetaDecorator metaTitle='Home Page' />
  </>
);

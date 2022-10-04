import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/layout/Layout";
import HomeHero from "../feature/home/HomeHero";
import { Container } from "../components";
import { RecipeMenu } from "../feature/home/RecipeMenu";

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <div className='spacer-xxxl'>
        <Container>
          <RecipeMenu />
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

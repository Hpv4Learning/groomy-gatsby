import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/layout/Layout";
import HomeHero from "../feature/home/HomeHero";

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

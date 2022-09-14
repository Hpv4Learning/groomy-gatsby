import * as React from "react";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
  return <main>Il nostro incredibile sito</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

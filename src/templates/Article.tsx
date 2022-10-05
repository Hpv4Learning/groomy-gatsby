import { graphql, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../components/layout/Layout";

const Article: React.FC<
  PageProps<Queries.ArticlePageQuery, { title: string; _id: string }>
> = ({ pageContext, data }) => {
  const { title } = pageContext;
  console.log(data);
  return <Layout>{title}</Layout>;
};

export const query = graphql`
  query ArticlePage($_id: String!) {
    sanityRecipe(_id: { eq: $_id }) {
      titolo
      riassunto
      ingredienti
      image {
        asset {
          gatsbyImageData
        }
      }
      descrizione {
        style
        children {
          text
        }
      }
    }
  }
`;

export default Article;

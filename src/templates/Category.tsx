import { graphql, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../components/layout/Layout";

const Category: React.FC<
  PageProps<Queries.CategoryPageQuery, { title: string; _id: string }>
> = ({ pageContext, data }) => {
  console.log(data);
  return <Layout>{pageContext.title}</Layout>;
};

export default Category;

export const query = graphql`
  query CategoryPage($_id: String!) {
    sanityCategory(_id: { eq: $_id }) {
      ricettario {
        riassunto
        titolo
        image {
          asset {
            gatsbyImageData
          }
        }
        cokkedby {
          complete_name
        }
      }
    }
  }
`;

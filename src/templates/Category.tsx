import { graphql, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../components/layout/Layout";
import LastRecipe from "../feature/category/LastRecipe";
import { createSlugFromTitle } from "../utils";

const Category: React.FC<
  PageProps<Queries.CategoryPageQuery, { title: string; _id: string }>
> = ({ pageContext, data }) => {
  return (
    <Layout>
      {data.allSanityRecipe ? (
        <LastRecipe
          {...data.sanityRecipe}
          categoryLink={createSlugFromTitle(pageContext.title)}
        />
      ) : null}
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query CategoryPage($start: Int!, $ITEM_PER_PAGE: Int!, $lastItemId: String!) {
    allSanityRecipe(
      skip: $start
      sort: { order: DESC, fields: _createdAt }
      limit: $ITEM_PER_PAGE
    ) {
      nodes {
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
    sanityRecipe(_id: { eq: $lastItemId }) {
      titolo
      riassunto
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

//FAI ESEMPIO NON PAGINATO
// export const query = graphql`
//   query CategoryPage($_id: String!) {
//     sanityCategory(_id: { eq: $_id }) {
//       ricettario {
//         riassunto
//         titolo
//         image {
//           asset {
//             gatsbyImageData
//           }
//         }
//         cokkedby {
//           complete_name
//         }
//       }
//     }
//   }
// `;

import { graphql, PageProps } from "gatsby";
import React from "react";
import { Container, Subtitle } from "../components";
import { Layout } from "../components/layout/Layout";
import { CategoryProvider } from "../feature/category/context";
import LastRecipe from "../feature/category/LastRecipe";
import Paginator from "../feature/category/Paginator";
import RecipeCategorySection from "../feature/category/ReacipeCategorySection";
import { createSlugFromTitle } from "../utils";

const Category: React.FC<
  PageProps<
    Queries.CategoryPageQuery,
    { title: string; _id: string; currentPage: number; numOfPages: number }
  >
> = ({ pageContext, data }) => {
  const ctx = React.useMemo(
    () => ({
      currentPage: pageContext.currentPage,
      numOfPages: pageContext.numOfPages,
      slug: createSlugFromTitle(pageContext.title) || "",
    }),
    [],
  );
  return (
    <Layout>
      <CategoryProvider value={ctx}>
        {data.allSanityRecipe ? <LastRecipe {...data.sanityRecipe} /> : null}
        <div className='spacer-xxxl'>
          <Container>
            <Subtitle as='h2' weight='semibold'>
              {`Le nostre ricette ${pageContext.title}`}
            </Subtitle>
          </Container>
          <div className='spacer-xl'>
            <RecipeCategorySection ricette={data.allSanityRecipe.nodes} />
          </div>
        </div>
        {pageContext.numOfPages > 0 ? (
          <div className='spacer-xl'>
            <Paginator />
          </div>
        ) : null}
      </CategoryProvider>
      <div className='spacer-xxl'></div>
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query CategoryPage(
    $start: Int!
    $ITEM_PER_PAGE: Int!
    $lastItemId: String!
    $articles: [String]
  ) {
    allSanityRecipe(
      skip: $start
      sort: { order: DESC, fields: _createdAt }
      limit: $ITEM_PER_PAGE
      filter: { _id: { in: $articles } }
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
        cokkedby {
          complete_name
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

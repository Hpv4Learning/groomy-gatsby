import { graphql, PageProps } from "gatsby";
import React from "react";
import { Container, SubTitle } from "../components";
import { Layout } from "../components/layout/Layout";
import LastRecipe from "../feature/category/LastRecipe";
import RecipeCategorySection from "../feature/category/ReacipeCategorySection";
import { CategoryProvider } from "../feature/category/context";
import { createSlugFromTitle } from "../utils";
import Paginator from "../feature/category/Paginator";

type ContextProps = {
  titolo: string;
  currentPage: number;
  numOfPages: number;
};

const Category: React.FC<
  PageProps<Queries.CategoryPageQuery, ContextProps>
> = ({ data, pageContext }) => {
  const { titolo, numOfPages, currentPage } = pageContext;

  const ctx = React.useMemo(
    () => ({
      slug: createSlugFromTitle(titolo) || "",
      numOfPages,
      currentPage,
    }),
    [titolo],
  );
  return (
    <Layout>
      <CategoryProvider value={ctx}>
        {data.sanityRecipe ? <LastRecipe {...data.sanityRecipe} /> : null}
        <Container>
          <div className='spacer-xl'>
            {titolo ? <SubTitle as='h2'>{titolo}</SubTitle> : null}
          </div>
          {data.allSanityRecipe.nodes ? (
            <div className='spacer-xl'>
              <RecipeCategorySection ricette={data.allSanityRecipe.nodes} />
            </div>
          ) : null}
          <div className='spacer-xl'>
            <Paginator />
          </div>
          <div className='spacer-xl'></div>
        </Container>
      </CategoryProvider>
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage(
    $lastItemId: String!
    $ITEM_PER_PAGE: Int!
    $start: Int!
    $articles: [String]
  ) {
    allSanityRecipe(
      sort: { order: DESC, fields: _createdAt }
      skip: $start
      filter: { _id: { in: $articles } }
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

export default Category;

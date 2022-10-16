import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Container, Recipe, SubTitle } from "../../components";
import { createSlugFromTitle } from "../../utils";

const ReacipeSection = () => {
  const data: Queries.Last6RecipeQuery = useStaticQuery(query);
  return (
    <div>
      <SubTitle weight='semibold'>Ricette più Recenti</SubTitle>
      <Container className='spacer-lg'>
        <div className='flex justify-content-between flex-wrap'>
          {data.allSanityRecipe.nodes.map((recipe) =>
            recipe?.category?.titolo ? (
              <Link
                to={`/${createSlugFromTitle(
                  recipe?.category?.titolo,
                )}/${createSlugFromTitle(recipe.titolo)}/`}
                style={{ marginBottom: "34px" }}
              >
                <Recipe
                  style={{
                    height: "100%",
                  }}
                  key={recipe.titolo}
                  title={recipe.titolo}
                  image={recipe.image?.asset}
                  description={recipe.riassunto}
                  chef={recipe.cokkedby?.complete_name}
                />
              </Link>
            ) : null,
          )}
        </div>
      </Container>
      <div className='spacer-xxl'></div>
    </div>
  );
};

const query = graphql`
  query Last6Recipe {
    allSanityRecipe(limit: 8, sort: { order: ASC, fields: _createdAt }) {
      nodes {
        riassunto
        titolo
        category {
          titolo
        }
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

export default ReacipeSection;

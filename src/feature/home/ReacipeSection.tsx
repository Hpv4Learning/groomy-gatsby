import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Label,
  Paragraph,
  Recipe,
  Subtitle,
} from "../../components";

const CustomBox = styled("div")({
  maxWidth: "200px",
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0px 10px",
});

const ReacipeSection = () => {
  const data: Queries.Last6RecipeQuery = useStaticQuery(query);
  return (
    <div>
      <Subtitle weight='semibold'>Ricette più Recenti</Subtitle>
      <Container>
        <div
          className='flex spacer-xl justify-content-between'
          style={{
            alignItems: "flex-start",
          }}
        >
          <div className='flex justify-content-between flex-wrap'>
            {data.allSanityRecipe.nodes.map((recipe) => (
              <Recipe
                key={recipe.titolo}
                title={recipe.titolo}
                image={recipe.image?.asset}
                description={recipe.riassunto}
                chef={recipe.cokkedby?.complete_name}
              />
            ))}
          </div>
          <CustomBox>
            <Paragraph weight='medium'>Nuova Ricetta?</Paragraph>
            <Label className='spacer-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut
              a.
            </Label>
            <Button color='purple' className='spacer-md' isRounded size='xl'>
              Contattaci
            </Button>
          </CustomBox>
        </div>
      </Container>
      <div className='spacer-xxl'></div>
    </div>
  );
};

const query = graphql`
  query Last6Recipe {
    allSanityRecipe(limit: 6, sort: { order: ASC, fields: _createdAt }) {
      nodes {
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

export default ReacipeSection;

import React from "react";
import styled from "styled-components";
import { useCustomTheme } from "../../styles/theme";
import { Container } from "../../components/Container";
import {
  Button,
  Display,
  Heading,
  RoundedImageContainer,
} from "../../components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { createSlugFromTitle } from "../../utils";
import { useCategoryContext } from "./context";
const Wrapper = styled("div")<any>({
  height: "calc( 100vh - 72px )",
  width: "100%",
  display: "flex",
  position: "relative",
});

type LastRecipeProps = Queries.CategoryPageQuery["sanityRecipe"];

const LastRecipe: React.FC<Partial<LastRecipeProps>> = (props) => {
  const theme = useCustomTheme();
  const { slug } = useCategoryContext();
  const { titolo, image, riassunto } = props || {};
  const gatsbyImage = image && getImage(image?.asset);
  if (props)
    return (
      <Wrapper>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          }}
        >
          <div
            className='flex flex-column justify-content-center'
            style={{
              background: theme.colors.yellow[400],
              maxWidth: "50%",
              width: "100%",
              height: "100%",
            }}
          />

          <div
            className='flex flex-column justify-content-center'
            style={{
              width: "100%",
            }}
          />
        </div>
        <Container
          style={{
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className='flex flex-column justify-content-center'
            style={{
              background: theme.colors.yellow[400],
              width: "100%",
              height: "100%",
            }}
          >
            <div>
              <Display weight='semibold'>{titolo}</Display>
              <div
                className='spacer-md'
                style={{
                  maxWidth: "596px",
                }}
              >
                <Heading>{riassunto}</Heading>
              </div>
              {titolo ? (
                <div className='spacer-lg'>
                  <Link to={`/${slug}/${createSlugFromTitle(titolo)}/`}>
                    <Button size='xl'>Scopri</Button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
          <div
            className='flex flex-column justify-content-center'
            style={{
              width: "100%",
              height: "100%",
              alignItems: "flex-end",
            }}
          >
            {gatsbyImage ? (
              <div>
                <RoundedImageContainer>
                  <GatsbyImage
                    image={gatsbyImage}
                    alt='una dolce bambina che cucina'
                    loading='eager'
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </RoundedImageContainer>
              </div>
            ) : null}
          </div>
        </Container>
      </Wrapper>
    );
  return null;
};

export default LastRecipe;

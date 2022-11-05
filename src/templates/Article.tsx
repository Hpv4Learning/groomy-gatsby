import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import {
  Container,
  Display,
  Heading,
  Paragraph,
  SubTitle,
} from "../components";
import { Layout } from "../components/layout/Layout";
import { ThemeType } from "../styles/theme";

const ImageArticleBox = styled("div")({
  overflow: "hidden",
  borderRadius: "16px",
  width: "100%",
  maxHeight: "529px",
});

const FixedBox = styled("div")<any>(({ theme }: { theme: ThemeType }) => ({
  border: "1px solid",
  borderColor: theme.colors.gray[400],
  borderRadius: "12px",
  padding: "16px",
  position: "sticky",
  top: "34px",
  right: "0px",
  width: "100%",
  "& > *": {
    marginBottom: "12px",
  },
}));

const Article: React.FC<PageProps<Queries.ArticlePageQuery>> = ({ data }) => {
  const image = React.useMemo(
    () =>
      data.sanityRecipe?.image?.asset
        ? getImage(data.sanityRecipe?.image?.asset)
        : null,
    [],
  );
  return (
    <Layout>
      <Container>
        <div
          className='spacer-xxl flex justify-content-between'
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              maxWidth: "961px",
              width: "100%",
            }}
          >
            <Display weight='semibold'>{data.sanityRecipe?.titolo}</Display>
            {data.sanityRecipe?.riassunto ? (
              <div className='spacer-lg'>
                <Heading>{data.sanityRecipe?.riassunto}</Heading>
              </div>
            ) : null}
            {image ? (
              <div className='spacer-xl'>
                <ImageArticleBox>
                  <GatsbyImage
                    style={{
                      height: "100%",
                    }}
                    image={image}
                    alt={data.sanityRecipe?.titolo || "Placeholder Text"}
                  />
                </ImageArticleBox>
              </div>
            ) : null}
            <div className='spacer-xxl'>
              {data.sanityRecipe?.descrizione?.map((text) => {
                switch (text?.style) {
                  case "h2":
                    return text.children?.map((child) => (
                      <SubTitle
                        className='spacer-xl'
                        key={child?._key}
                        weight='semibold'
                      >
                        {child?.text}
                      </SubTitle>
                    ));
                  default:
                    return text?.children?.map((child) => (
                      <Heading className='spacer-sm' key={child?._key}>
                        {child?.text}
                      </Heading>
                    ));
                }
              })}
            </div>
          </div>
          <div
            style={{
              position: "relative",
              maxWidth: "396px",
            }}
          >
            <FixedBox>
              {data.sanityRecipe?.ingredienti?.map((ingrediente) => (
                <Paragraph weight='medium' key={ingrediente}>
                  {ingrediente}
                </Paragraph>
              ))}
            </FixedBox>
          </div>
        </div>
      </Container>
      <div className='spacer-xxl'></div>
    </Layout>
  );
};

export const query = graphql`
  query ArticlePage($id: String!) {
    sanityRecipe(id: { eq: $id }) {
      titolo
      riassunto
      descrizione {
        style
        children {
          _key
          text
        }
      }
      ingredienti
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Article;

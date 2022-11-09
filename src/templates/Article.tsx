import { graphql, HeadFC, PageProps } from "gatsby";
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
import {
  ArticleSchema,
  LinkHandler,
  MetaDecorator,
  RecipeSchema,
} from "../feature/seo/components";
import { ThemeType } from "../styles/theme";
import { useLocation } from "@reach/router";
import { createSlugFromTitle } from "../utils";

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
            <Display as='h1' weight='semibold'>
              {data.sanityRecipe?.titolo}
            </Display>
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
                        as='h2'
                        className='spacer-xl'
                        key={child?._key}
                        weight='semibold'
                      >
                        {child?.text}
                      </SubTitle>
                    ));
                  default:
                    return text?.children?.map((child) => (
                      <Heading as='p' className='spacer-sm' key={child?._key}>
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
      _createdAt
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
          url
        }
      }
      category {
        titolo
      }
    }
  }
`;

export const Head: HeadFC<Queries.ArticlePageQuery> = ({ data }) => {
  const { pathname } = useLocation();

  const breadcrumbs = React.useMemo(
    () => [
      {
        text: "Home",
        link: "/",
      },
      {
        text: data.sanityRecipe?.category?.titolo as string,
        link: `/${createSlugFromTitle(
          data.sanityRecipe?.category?.titolo as string,
        )}/`,
      },
      {
        text: data.sanityRecipe?.titolo as string,
        link: pathname,
      },
    ],
    [pathname],
  );

  const instructions = React.useMemo(() => {
    if (!data.sanityRecipe?.descrizione) return;
    const customValue = data.sanityRecipe.descrizione.filter(
      (item) => item?.style === "normal",
    );
    if (customValue.length > 0) {
      console.log(customValue);
      const allTexts = customValue.map((el) =>
        el?.children?.map((text) => text?.text).join(" "),
      );
      return allTexts.join(" ");
    }
    return;
  }, [data.sanityRecipe?.descrizione]);
  return (
    <>
      <MetaDecorator
        metaTitle={data.sanityRecipe?.titolo as string}
        metaDescription={data.sanityRecipe?.riassunto}
        externalImage={data.sanityRecipe?.image?.asset?.url}
      />
      <LinkHandler />
      {data.sanityRecipe?.ingredienti && instructions ? (
        <RecipeSchema
          breadcrumbs={breadcrumbs}
          metaTitle={data.sanityRecipe?.titolo as string}
          metaDescription={data.sanityRecipe?.riassunto}
          image={data.sanityRecipe?.image?.asset?.url}
          ingredients={data?.sanityRecipe?.ingredienti as string[]}
          instructions={instructions}
          published={data.sanityRecipe._createdAt as string}
        />
      ) : (
        <ArticleSchema
          breadcrumbs={breadcrumbs}
          metaTitle={data.sanityRecipe?.titolo as string}
          metaDescription={data.sanityRecipe?.riassunto}
          image={data.sanityRecipe?.image?.asset?.url}
        />
      )}
    </>
  );
};

export default Article;

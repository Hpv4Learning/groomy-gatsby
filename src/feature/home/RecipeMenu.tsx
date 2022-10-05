import { graphql, Link, useStaticQuery } from "gatsby";
import {
  GatsbyImage,
  getImage,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../components";
import { ThemeType } from "../../styles/theme";
import { createSlugFromTitle } from "../../utils";

type Props = {
  title: string | null;
  image?: ImageDataLike | null;
};

const CustomBox = styled("div")<any>(({ theme }: { theme: ThemeType }) => ({
  background: theme.colors.yellow[300],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  maxWidth: "264px",
  width: "100%",
  padding: "76px 0px",
  border: "1px solid",
  borderColor: theme.colors.yellow[400],
  trasnition: "all 75ms linear",
  cursor: "pointer",
  ":hover": {
    boxShadow: theme.shadow.heavy,
    background: "#fff",
  },
}));

const MenuItem = ({ title, image }: Props) => {
  const gatsbyImage = image ? getImage(image) : null;

  return (
    <CustomBox>
      {gatsbyImage ? (
        <div
          style={{
            maxWidth: "64px",
          }}
        >
          <GatsbyImage
            image={gatsbyImage}
            alt={title || "Default Item Title"}
          />
        </div>
      ) : null}

      <Heading weight='semibold' textAling='center' className='spacer-lg'>
        {title}
      </Heading>
    </CustomBox>
  );
};

export const RecipeMenu = () => {
  const menu: Queries.MenuQuery = useStaticQuery(query);
  return (
    <div className='flex align-items-center justify-content-between'>
      {menu.allSanityCategory.nodes.map((item) => {
        return (
          <Link
            style={{
              display: "contents",
            }}
            key={item.titolo}
            to={`/${createSlugFromTitle(item.titolo)}/`}
          >
            <MenuItem title={item.titolo} image={item.image?.asset} />
          </Link>
        );
      })}
    </div>
  );
};

const query = graphql`
  query Menu {
    allSanityCategory {
      nodes {
        titolo
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

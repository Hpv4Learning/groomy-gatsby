import { graphql, useStaticQuery } from "gatsby";
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
      <Heading weight='semibold' textAling='center'>
        {title}
      </Heading>
    </CustomBox>
  );
};

export const RecipeMenu = () => {
  const menu: Queries.MenuQuery = useStaticQuery(query);
  return (
    <div className='flex align-items-center justify-content-between'>
      <CustomBox>
        <div
          style={{
            maxWidth: "64px",
          }}
        >
          <StaticImage
            src='./images/salad.png'
            alt={"Default Item Title"}
            placeholder='tracedSVG'
          />
        </div>

        <Heading weight='semibold' textAling='center'>
          all
        </Heading>
      </CustomBox>
      {menu.allSanityCategory.nodes.map((item) => {
        return (
          <MenuItem
            key={item.titolo}
            title={item.titolo}
            image={item.image?.asset}
          />
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

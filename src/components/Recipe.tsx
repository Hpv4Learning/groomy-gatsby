import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { ThemeType } from "../styles/theme";
import { Heading, Label, Paragraph } from "./Typography";

const CustomBox = styled("article")<any>(({ theme }: { theme: ThemeType }) => ({
  padding: "16px",
  maxWidth: "333px",
  width: "100%",
  border: `1px solid ${theme.colors.yellow[500]}`,
  background: theme.colors.yellow[300],
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "36px",
  cursor: "pointer",
  transition: "shadow 75ms linear",
  ":hover": {
    boxShadow: theme.shadow.light,
  },
  ".img-container": {
    maxWidth: "297px",
    maxHeight: "235px",
    borderRadius: "6px",
    overflow: "hidden",
    transform: "translateZ(0)",
    width: "100%",
  },
}));

type Props = {
  title: string | null;
  description?: string | null;
  image?: ImageDataLike | null;
  chef?: string | null;
};

const Recipe = ({ title, description, image, chef }: Props) => {
  const gatsbyImage = image && getImage(image);

  return (
    <CustomBox>
      <div className='img-container'>
        {gatsbyImage ? (
          <GatsbyImage
            image={gatsbyImage}
            alt={title || "Missing Image Title"}
            style={{
              height: "100%",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "0",
              paddingTop: "56.25%",
              background: "#676767",
            }}
          />
        )}
      </div>
      <Paragraph textAling='center' weight='medium' className='spacer-sm'>
        {title || "Missing Title"}
      </Paragraph>
      <Label textAling='center' className='spacer-sm'>
        {description}
      </Label>
      <div className='spacer-md' />
      <div
        className='flex'
        style={{
          justifyContent: "flex-end",
          width: "100%",
          marginTop: "auto",
        }}
      >
        {chef || "unknown"}
      </div>
    </CustomBox>
  );
};

export { Recipe };

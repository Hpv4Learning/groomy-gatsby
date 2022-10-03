import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Label, Paragraph } from "../../components";
import { ThemeType } from "../../styles/theme";
import { starCreator } from "./utils";

const ReviewBox = styled("div")(({ theme }: { theme: ThemeType }) => ({
  border: "1px solid",
  borderColor: "#e9e9e9",
  borderRadius: "16px",
  maxWidth: "343px",
  background: "white",
  padding: "16px",
  ".image-container": {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    overflow: "hidden",
    translate: "translateZ(0%)",
    display: "flex",
  },
}));

type Props = {
  name: string | null;
  image?: IGatsbyImageData;
};

export const Review = ({ name, image }: Props) => {
  return (
    <ReviewBox>
      <div className='flex align-items-center'>
        {image ? (
          <div className='image-container'>
            <GatsbyImage image={image} alt={name || "placeholder"} />
          </div>
        ) : null}

        <div
          style={{
            marginLeft: "8px",
          }}
        >
          <Paragraph weight='medium'>{name || "Il nome"}</Paragraph>
          <div className='spacer-xs'>
            {starCreator() ? starCreator() : null}
          </div>
        </div>
      </div>
      <div className='spacer-sm'>
        <Label weight='regular' color='#657666'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Label>
      </div>
    </ReviewBox>
  );
};

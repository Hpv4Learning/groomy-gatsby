import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { ThemeType } from "../../styles/theme";
import { RoundedImageContainer } from "../../components/RoundedImageContainer";
import { Typography } from "../../components/Typography";

const StyledBox = styled("div")<any>(function ({
  theme,
}: {
  theme: ThemeType;
}) {
  return {
    background: theme.colors.yellow[400],
    height: "calc( 100vh - 72px )",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  };
});

const HomeHero = () => {
  return (
    <StyledBox>
      <RoundedImageContainer>
        <div className='wrapper'>
          <StaticImage
            src='../../images/logo.png'
            alt='Groomy Big Logo'
            placeholder='tracedSVG'
            loading='eager'
          />
        </div>
      </RoundedImageContainer>

      <Typography
        weight='heavy'
        color='white'
        as='h1'
        style={{
          textTransform: "uppercase",
          fontSize: "260px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Groomy
      </Typography>
    </StyledBox>
  );
};

export default HomeHero;

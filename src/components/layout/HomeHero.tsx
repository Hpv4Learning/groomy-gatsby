import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { ThemeType } from "../../styles/theme";
import { Typography } from "../Typography";

const StyledBox = styled("div")<any>(function ({
  theme,
}: {
  theme: ThemeType;
}) {
  return {
    background: theme.colors.yellow[400],
    height: "100vh",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  };
});

const StyledImageContainer = styled<any>("div")(function ({
  theme,
}: {
  theme: ThemeType;
}) {
  return {
    borderRadius: "50%",
    maxWidth: "657px",
    width: "100%",
    height: "657px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.colors.yellow[500],
    ".wrapper": {
      maxWidth: "467px",
      maxHeight: "467px",
      width: "100%",
    },
  };
});

const HomeHero = () => {
  return (
    <StyledBox>
      <StyledImageContainer>
        <div className='wrapper'>
          <StaticImage src='../../images/logo.png' alt='Groomy Big Logo' />
        </div>
      </StyledImageContainer>

      <Typography
        weight='heavy'
        color='white'
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

import React from "react";
import styled from "styled-components";
import { ThemeType, useCustomTheme } from "../../styles/theme";
import { Container } from "../../components/Container";
import {
  Button,
  Display,
  Heading,
  RoundedImageContainer,
} from "../../components";
import { StaticImage } from "gatsby-plugin-image";
const Wrapper = styled("div")<any>({
  height: "calc( 100vh - 72px )",
  width: "100%",
  display: "flex",
  position: "relative",
});

const AboutHero = () => {
  const theme = useCustomTheme();

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
          <div style={{}}>
            <Display weight='semibold'>Chi siamo</Display>
            <div
              className='spacer-md'
              style={{
                maxWidth: "596px",
              }}
            >
              <Heading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium rem, totam, voluptatum sed, architecto exercitationem
                doloremque dolorem optio quae soluta deleniti vitae fugiat
                dolorum molestias debitis vero commodi officia dolore ad
                officiis adipisci? Architecto voluptas officia consequuntur a
                modi totam!
              </Heading>
            </div>
            <div className='spacer-lg'>
              <Button isRounded color='purple' size='xl'>
                Contattaci
              </Button>
            </div>
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
          <div>
            <RoundedImageContainer>
              <StaticImage
                src='./images/about.jpeg'
                alt='una dolce bambina che cucina'
                placeholder='tracedSVG'
                loading='eager'
              />
            </RoundedImageContainer>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default AboutHero;

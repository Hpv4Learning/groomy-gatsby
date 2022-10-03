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
const Wrapper = styled("div")<any>(({ theme }: { theme: ThemeType }) => ({
  height: "calc( 100vh - 72px )",
  width: "100%",
  display: "flex",
}));

const AboutHero = () => {
  const theme = useCustomTheme();

  return (
    <Wrapper>
      <div
        className='flex flex-column justify-content-center'
        style={{
          background: theme.colors.yellow[400],
          maxWidth: "60%",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            marginLeft: "24px",
          }}
        >
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
              doloremque dolorem optio quae soluta deleniti vitae fugiat dolorum
              molestias debitis vero commodi officia dolore ad officiis
              adipisci? Architecto voluptas officia consequuntur a modi totam!
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
        }}
      >
        <div
          style={{
            margin: "auto",
          }}
        >
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
    </Wrapper>
  );
};

export default AboutHero;

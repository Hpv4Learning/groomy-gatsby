import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import { ThemeType } from "../styles/theme";
import {
  Button,
  Display,
  Heading,
  Label,
  Paragraph,
  Subtitle,
} from "../components";

const Prova = styled.div(({ theme }: { theme: ThemeType }) => ({
  width: "400px",
  height: "400px",
  background: theme.colors.orange[400],
}));

const IndexPage = () => {
  return (
    <main>
      <Prova as='section' />
      <Label weight='heavy'>Lorem ipsum dolor sit amet consectetur.</Label>
      <Paragraph weight='heavy'>
        Lorem ipsum dolor sit amet consectetur.
      </Paragraph>
      <Heading weight='heavy'>Lorem ipsum dolor sit amet consectetur.</Heading>
      <Subtitle weight='heavy'>
        Lorem ipsum dolor sit amet consectetur.
      </Subtitle>
      <Display weight='heavy'>Lorem ipsum dolor sit amet consectetur.</Display>
      <div style={{ marginTop: "72" }}>
        <Button>Contained</Button>
        <Button color='purple'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='outlined' size='sm' isRounded>
          Outlined
        </Button>
        <Button leftIcon={<div>--K</div>} size='xl' variant='outlined'>
          With Icon
        </Button>
        <Button rightIcon={<div>--K</div>} size='md'>
          With Icon
        </Button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

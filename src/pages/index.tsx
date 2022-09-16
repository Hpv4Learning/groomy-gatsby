import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import { ThemeType } from "../styles/theme";

const Prova = styled.div(({ theme }: { theme: ThemeType }) => ({
  width: "400px",
  height: "400px",
  background: theme.colors.orange[400],
}));

const Typography = styled.div<{ weight?: keyof ThemeType["fontWeight"] }>(
  ({ theme }: { theme: ThemeType }) =>
    ({ weight }) => ({
      fontSize: "24px",
      fontWeight: weight ? theme.fontWeight[weight] : 400,
    }),
);

const IndexPage = () => {
  return (
    <main>
      <Prova as='section' />
      <Typography weight='heavy'>Ciao</Typography>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

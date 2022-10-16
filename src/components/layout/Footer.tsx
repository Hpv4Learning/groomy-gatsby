import React from "react";
import styled from "styled-components";
import { ThemeType } from "../../styles/theme";
import { Container } from "../Container";
import { Paragraph } from "../Typography";

const StyledBox = styled.footer<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 72px;
  width: 100%;
  background: ${(props) => props.theme.colors.yellow[300]};
`;

export const Footer = () => {
  return (
    <StyledBox>
      <Container>
        <Paragraph textAlign='center'>Made with Gastby</Paragraph>
      </Container>
    </StyledBox>
  );
};

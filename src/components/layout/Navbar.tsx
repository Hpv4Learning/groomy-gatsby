import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { Label } from "../Typography";

const StyledBox = styled.div({
  height: "72px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "transaprent",
  ".nav-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".nav-logo": {
    flex: 1,
    maxWidth: "36px",
    width: "100%",
  },
  ".nav-links": {
    display: "flex",
    "& >*:not(:last-of-type)": {
      marginRight: "56px",
    },
  },
  ".nav-label": {
    ":hover": {
      textDecoration: "underline",
    },
  },
});

export const Navbar = () => {
  return (
    <StyledBox as='nav'>
      <Container className='nav-container'>
        <div className='nav-logo'>
          <StaticImage src='../../images/logo.png' alt='groomy Logo' />
        </div>
        <div className='nav-links'>
          <Link to='/'>
            <div className='nav-label'>
              <Label>Home</Label>
            </div>
          </Link>

          <Link to='/about/'>
            <div className='nav-label'>
              <Label>Chi Siamo</Label>
            </div>
          </Link>

          <Link to='/ricettario/'>
            <div className='nav-label'>
              <Label>Ricettario</Label>
            </div>
          </Link>
        </div>
      </Container>
    </StyledBox>
  );
};

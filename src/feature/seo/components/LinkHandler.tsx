import React from "react";
import { useLocation } from "@reach/router";

export const LinkHandler = () => {
  const { href } = useLocation();
  return (
    <>
      <link type='text' rel='canonical' href={href} />
      <link type='text' rel='alternate' href={href} hrefLang='it-IT' />
    </>
  );
};

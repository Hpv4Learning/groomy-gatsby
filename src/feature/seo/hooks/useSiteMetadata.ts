import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const useSiteMetadata = () => {
  const data: Queries.SiteMetadataHelperQuery = useStaticQuery(query);
  const { site } = data;
  return site!.siteMetadata;
};

const query = graphql`
  query SiteMetadataHelper {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
        image
      }
    }
  }
`;

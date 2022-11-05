import type { GatsbyConfig } from "gatsby";
import { config as dotenv } from "dotenv";

dotenv({
  path: `.env.${process.env.NODE_ENV}`,
});
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Groomy`,
    siteUrl: `https://www.yourdomain.tld`,
    metaDescription:
      "Impara dai migliori chef italiani ricette orientali, funzionali ed estive",
    author: "@hpv4learning",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: "always",
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        "projectId": process.env.GATSBY_SANITY_PROJECT_ID,
        "dataset": process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/static/*": ["cache-control: public, max-age=31536000, immutable"],
          "/fonts/*": ["cache-control: public, max-age=31536000, immutable"],
          "/*.svg": ["cache-control: public, max-age=31536000, immutable"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "pages",
        "path": "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;

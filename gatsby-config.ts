import type { GatsbyConfig } from "gatsby";
import { config as dotenv } from "dotenv";
import { allSitePageQuery, AllSitePageQueryProps } from "./query";

dotenv({
  path: `.env.${process.env.NODE_ENV}`,
});
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Groomy`,
    siteUrl:
      process.env.NODE_ENV === "production"
        ? `https://groomygatsbylayout.gatsbyjs.io/`
        : "http://localhost:8000/",
    description:
      "Impara dai migliori chef italiani ricette orientali, funzionali ed estive",
    author: "@hpv4learning",
    image: "/logo.png",
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
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/static/*": ["cache-control: public, max-age=31536000, immutable"],
          "/fonts/*": ["cache-control: public, max-age=31536000, immutable"],
          "/*.png": ["cache-control: public, max-age=31536000, immutable"],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/**/404", "/**/404.html"],
        query: allSitePageQuery,
        resolveSiteUrl: ({ site }: { site: Queries.Site }) => {
          return site.siteMetadata?.siteUrl;
        },
        resolvePages: ({ allSitePage }: AllSitePageQueryProps) => {
          return allSitePage.nodes;
        },
        filterPages: ({ path }: { path: string }) => {
          const paginatedPath = path.split("/").filter((x) => Boolean(x));
          const isPaginated = !isNaN(
            Number(paginatedPath[paginatedPath.length - 1]),
          );
          return isPaginated;
        },
        serialize: ({ path }: { path: string }) => {
          return {
            url: path,
            priority: path === "/" ? 1.0 : 0.7,
            changefreq: "daily",
          };
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

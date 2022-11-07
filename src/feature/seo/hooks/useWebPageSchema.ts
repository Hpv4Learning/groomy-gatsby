import { GlobalSeoProps, WebPageType } from "../types";
import { useSiteMetadata } from "./useSiteMetadata";
import { useLocation } from "@reach/router";
import React from "react";
import { useOrganizationSchema } from "./useOrganizationSchema";

type Props = {
  type?: WebPageType;
} & GlobalSeoProps;

export const useWebPageSchema = (props?: Props) => {
  const { metaTitle, image, imageAltText, publishDate, modifiedDate, type } =
    props || {};
  const { pathname } = useLocation();
  const {
    title: seoTitle,
    description: seoDescription,
    siteUrl,
    image: seoImage,
  } = useSiteMetadata() || {};

  const organizationData = useOrganizationSchema();
  const siteAddress = React.useMemo(
    () => siteUrl + pathname,
    [siteUrl, pathname],
  );

  const jsonLd = React.useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          //CREATE DEFAULT SCHEMA FOR WEBSITE
          "@type": "WebSite",
          "@id": siteUrl + "/" + "#website",
          "url": siteUrl + "/",
          "name": metaTitle,
        },
        {
          //CREATE WEBPAGE SCHEMA COMPONENT
          "@type": type || "WebPage",
          "@id": siteAddress + "#webpage",
          "url": siteAddress,
          "inLanguage": "it",
          "name": seoTitle,
          "isPartOf": {
            "@id": siteUrl + "/" + "#website",
          },
          "image": {
            "@type": "ImageObject",
            "@id": siteAddress + "#primaryImage",
            "url": image ? image : `${siteUrl}/${seoImage}`,
            "width": 512,
            "height": 512,
            "caption": imageAltText,
          },
          "primaryImageOfPage": {
            "@id": siteAddress + "#primaryImage",
          },
          "datePublished": publishDate,
          "dateModified": modifiedDate,
          "description": seoDescription,
          "publisher": organizationData,
          "breadcrumb": {
            "@id": siteUrl + "/#breadcrumb",
          },
        },
      ],
    }),
    [
      siteUrl,
      metaTitle,
      siteAddress,
      seoTitle,
      seoDescription,
      image,
      organizationData,
    ],
  );

  return jsonLd;
};

export default useWebPageSchema;

import React from "react";
import { Breadcrumb } from "../types";
import { useSiteMetadata } from "./useSiteMetadata";

type Props = {
  "@type": "ListItem";
  "position": number;
  "item": {
    "@type": "WebPage";
    "@id": string;
    "url": string;
    "name": string;
  };
};

export const useBreadcrumbSchema = (breadcrumbs: Breadcrumb[]) => {
  const { siteUrl } = useSiteMetadata() || {};

  const createBreadcrumbJson = React.useMemo(() => {
    const breadcrumbObj: {
      "@type": string;
      "@id": string;
      itemListElement: Props[];
    } = {
      "@type": "BreadcrumbList",
      "@id": siteUrl + "/#breadcrumb",
      "itemListElement": [],
    };

    breadcrumbs.forEach((el, index) => {
      const { link, text } = el;
      const breadcrumbElement = {
        "@type": "ListItem" as const,
        "position": index + 1,
        "item": {
          "@type": "WebPage" as const,
          "@id": siteUrl + link,
          "url": siteUrl + link,
          "name": text,
        },
      };

      breadcrumbObj.itemListElement.push(breadcrumbElement);
    });

    return breadcrumbObj;
  }, [siteUrl]);
  return createBreadcrumbJson;
};

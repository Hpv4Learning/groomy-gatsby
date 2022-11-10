import React from "react";
import { Breadcrumb } from "../types";

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

export const useBreadcrumbSchema = () => {
  // const createBreadcrumbJson = React.useMemo(() => {
  //   const breadcrumbObj: {
  //     "@type": string;
  //     "@id": string;
  //     itemListElement: Props[];
  //   } = {
  //     "@type": "BreadcrumbList",
  //     "@id": siteUrl + "/#breadcrumb",
  //     "itemListElement": [],
  //   };;

  //   return breadcrumbObj;
  // }, [siteUrl]);
  return null;
};

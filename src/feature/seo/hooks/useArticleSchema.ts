import React from "react";
import { GlobalSeoProps } from "../types";

type Props = GlobalSeoProps & {
  authorName?: string;
};

export const useArticleSchema = ({}: Props) => {
  // const articleJson = React.useMemo(() => {
  //   return [
  //     {
  //       "@type": type || "Article",
  //       "@id": siteUrl + "#article",
  //       "isPartOf": {
  //         "@type": "WebPage",
  //         "@id": siteUrl + "#webpage",
  //       },
  //       "author": {
  //         "@type": "Person",
  //         "@id": siteUrl + "#author",
  //         "name": author,
  //       },
  //       "publisher": {
  //         "@id": siteUrl + "/#organization",
  //       },
  //       "headline": metaTitle,
  //       "description": metaDescription,
  //       "datePublished": publishDate,
  //       "dateModified": modifiedDate,
  //       "mainEntityOfPage": siteUrl + "#webpage",
  //       "image": {
  //         "@type": "ImageObject",
  //         "@id": image + "/#primaryImage",
  //       },
  //     },
  //     {
  //       "@type": "Person",
  //       "@id": image + "/#author",
  //       "name": authorName,
  //       "image": {
  //         "@type": "ImageObject",
  //         "@id": image + "#author",
  //         "url": image,
  //         "caption": author,
  //       },
  //       "description": author,
  //     },
  //   ];
  // }, []);

  return null;
};

import React from "react";
import { useArticleSchema } from "../hooks/useArticleSchema";
import { useBreadcrumbSchema } from "../hooks/useBreadcrumbSchema";
import useWebPageSchema from "../hooks/useWebPageSchema";
import { Breadcrumb, GlobalSeoProps } from "../types";

type Props = GlobalSeoProps & {
  authorName?: string;
  breadcrumbs: Breadcrumb[];
};

export const ArticleSchema = ({
  type,
  metaTitle,
  metaDescription,
  image,
  publishDate,
  modifiedDate,
  imageAltText,
  breadcrumbs,
  authorName,
}: Props) => {
  const schema = useWebPageSchema({
    metaTitle,
    metaDescription,
    image,
    publishDate,
    modifiedDate,
    imageAltText,
  });

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbs);
  const articleSchema = useArticleSchema({
    type,
    metaTitle,
    metaDescription,
    image,
    publishDate,
    modifiedDate,
    authorName,
  });

  return (
    <script type='application/ld+json'>
      {JSON.stringify({
        ...schema,
        ["@graph"]: [...schema["@graph"], breadcrumbSchema, ...articleSchema],
      })}
    </script>
  );
};

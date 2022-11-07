import React from "react";
import { useBreadcrumbSchema } from "../hooks/useBreadcrumbSchema";
import useWebPageSchema from "../hooks/useWebPageSchema";
import { Breadcrumb, WebPageType } from "../types";

type Props = {
  breadcrumbs: Breadcrumb[];
  title?: string;
  description?: string;
  type?: WebPageType;
};

export const WebPageSchema = ({
  breadcrumbs,
  title,
  description,
  type,
}: Props) => {
  const schema = useWebPageSchema({
    metaTitle: title,
    metaDescription: description,
    type,
  });
  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbs);
  return (
    <script type='application/ld+json'>
      {JSON.stringify({
        ...schema,
        ["@graph"]: [...schema["@graph"], breadcrumbSchema],
      })}
    </script>
  );
};

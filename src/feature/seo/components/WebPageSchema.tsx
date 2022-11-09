import React from "react";
import { useBreadcrumbSchema } from "../hooks/useBreadcrumbSchema";
import useWebPageSchema from "../hooks/useWebPageSchema";
import { Breadcrumb, GlobalSeoProps, WebPageType } from "../types";

type Props = {
  type?: WebPageType;
  breadcrumbs: Breadcrumb[];
} & GlobalSeoProps;

export const WebPageSchema = ({
  breadcrumbs,
  metaTitle,
  metaDescription,
  type,
}: Props) => {
  const schema = useWebPageSchema({
    metaTitle,
    metaDescription,
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

import React from "react";
import { useOrganizationSchema, useWebPageSchema } from "../hooks/";

export const OrganizationSchema = () => {
  const schema = useWebPageSchema();
  delete schema["@graph"][1].breadcrumb;

  const organizarionSchema = useOrganizationSchema();

  return (
    <script type='application/ld+json'>
      {JSON.stringify({
        ...schema,
        ["@graph"]: [...schema["@graph"], organizarionSchema],
      })}
    </script>
  );
};

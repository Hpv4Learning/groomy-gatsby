import React from "react";
import {
  useRecipeSchema,
  useWebPageSchema,
  useBreadcrumbSchema,
  RecipeSchemaProps,
} from "../hooks";
import { Breadcrumb } from "../types";

type Props = RecipeSchemaProps & {
  breadcrumbs: Breadcrumb[];
  published: string;
};

export const RecipeSchema = ({
  metaTitle,
  metaDescription,
  published,
  ingredients,
  instructions,
  breadcrumbs,
  image,
}: Props) => {
  const schema = useWebPageSchema({
    metaTitle,
    metaDescription,
    image,
    publishDate: published,
  });

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbs);
  const recipeSchema = useRecipeSchema({
    metaDescription,
    ingredients,
    instructions,
    image,
  });

  return (
    <script type='application/ld+json'>
      {JSON.stringify({
        ...schema,
        ["@graph"]: [...schema["@graph"], breadcrumbSchema, ...recipeSchema],
      })}
    </script>
  );
};

import React from "react";
import { RecipeSchemaProps } from "../hooks";
import { Breadcrumb } from "../types";

type Props = RecipeSchemaProps & {
  breadcrumbs: Breadcrumb[];
  published: string;
};

export const RecipeSchema = ({}: Props) => {
  return null;
};

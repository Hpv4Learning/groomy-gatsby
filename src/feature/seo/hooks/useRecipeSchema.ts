import React from "react";
import { DefaultMetaProps } from "../types";
import { useSiteMetadata } from "./useSiteMetadata";

export type RecipeSchemaProps = DefaultMetaProps & {
  ingredients: string[];
  instructions: string;
};

export const useRecipeSchema = ({
  metaTitle,
  image,
  ingredients,
  instructions,
}: RecipeSchemaProps) => {
  const { siteUrl, image: metaImage, author } = useSiteMetadata() || {};
  const recipeJson = React.useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "cookTime": "PT1H",
        "isPartOf": {
          "@type": "WebPage",
          "@id": siteUrl + "#webpage",
        },
        "image": {
          "@type": "ImageObject",
          "@id": image + "/#primaryImage",
        },
        "recipeIngredient": ingredients,
        "name": metaTitle,
        "mainEntityOfPage": siteUrl + "#webpage",
        "nutrition": {
          "@type": "NutritionInformation",
          "calories": "240 calories",
          "fatContent": "9 grams fat",
        },
        "prepTime": "PT15M",
        "recipeInstructions": instructions,
        "recipeYield": "4 people",
        "suitableForDiet": "https://schema.org/LowFatDiet",
      },
      {
        "@type": "Person",
        "@id": metaImage + "/#author",
        "name": author,
        "image": {
          "@type": "ImageObject",
          "@id": metaImage + "#author",
          "url": metaImage,
        },
      },
    ],
    [],
  );
  return recipeJson;
};

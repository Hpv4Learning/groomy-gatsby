import { GatsbyNode } from "gatsby";
import {
  categoryQuery,
  CategoryQueryProps,
  recipeQuery,
  RecipeQueryProps,
} from "./query";
import { resolve } from "path";
import { createSlugFromTitle } from "./src/utils";
export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const allCategories = (await graphql(categoryQuery)) as CategoryQueryProps;
  const allRecipes = (await graphql(recipeQuery)) as RecipeQueryProps;

  allCategories.data.allSanityCategory.nodes.forEach((category) => {
    const slug = createSlugFromTitle(category.titolo);
    if (slug)
      createPage({
        path: slug,
        component: resolve("./src/templates/Category.tsx"),
        context: {
          _id: category._id,
          title: category.titolo,
        },
      });
  });

  allRecipes.data.allSanityCategory.nodes.forEach((category) => {
    const categorySlug = createSlugFromTitle(category.titolo);
    category.ricettario.forEach((recipe) => {
      const recipeSlug = createSlugFromTitle(recipe.titolo);
      if (recipeSlug)
        createPage({
          path: `${categorySlug}/${recipeSlug}/`,
          component: resolve("./src/templates/Category.tsx"),
          context: {
            _id: recipe._id,
            title: recipe.titolo,
          },
        });
    });
  });
};

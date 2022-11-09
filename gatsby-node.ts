import { GatsbyNode } from "gatsby";
import {
  allRecipeQuery,
  AllRecipeQueryProps,
  categoryQuery,
  CategoryQueryProps,
} from "./query";
import { createSlugFromTitle } from "./src/utils";
import { resolve } from "path";

const ITEM_PER_PAGE = 3;

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const allCategories = (await graphql(categoryQuery)) as CategoryQueryProps;
  const allRecipes = (await graphql(allRecipeQuery)) as AllRecipeQueryProps;

  allCategories.data.allSanityCategory.nodes.forEach((category) => {
    const slug = createSlugFromTitle(category.titolo);

    if (slug) {
      const recipes = category.ricettario
        .filter((x) => Boolean(x))
        .sort((a, b) => Date.parse(b._createdAt) - Date.parse(a._createdAt));

      const numOfPages = Math.ceil((recipes.length - 1) / ITEM_PER_PAGE);

      Array.from({ length: numOfPages }).forEach((_, index) => {
        const currentPage = index + 1;
        const start = index * ITEM_PER_PAGE + 1;

        createPage({
          path: currentPage === 1 ? slug : `${slug}/${currentPage}/`,
          component: resolve("./src/templates/Category.tsx"),
          context: {
            titolo: category.titolo,
            category_id: category._id,
            lastItemId: recipes[0]._id,
            numOfPages,
            currentPage,
            start,
            ITEM_PER_PAGE,
            articles: recipes.map((item) => item._id),
          },
        });
      });
    }
  });

  allRecipes.data.allSanityRecipe.nodes.forEach((recipe) => {
    const categorySlug = createSlugFromTitle(recipe?.category?.titolo);
    if (categorySlug) {
      createPage({
        path: `/${categorySlug}/${createSlugFromTitle(recipe.titolo)}/`,
        component: resolve("./src/templates/Article.tsx"),
        context: {
          id: recipe.id,
        },
      });
    }
  });
};

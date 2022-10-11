import { GatsbyNode } from "gatsby";
import {
  categoryQuery,
  CategoryQueryProps,
  recipeQuery,
  RecipeQueryProps,
} from "./query";
import { resolve } from "path";
import { createSlugFromTitle } from "./src/utils";

const ITEM_PER_PAGE = 3;

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const allCategories = (await graphql(categoryQuery)) as CategoryQueryProps;
  const allRecipes = (await graphql(recipeQuery)) as RecipeQueryProps;

  allCategories.data.allSanityCategory.nodes.forEach((category) => {
    const slug = createSlugFromTitle(category.titolo);
    if (slug) {
      const recipes = category.ricettario
        .filter((el) => Boolean(el._id))
        .sort((a, b) => Date.parse(b._createdAt) - Date.parse(a._createdAt));
      //Il più recente sarà sempre in alto a prescindere dalla pagina
      const numOfPages = Math.ceil((recipes.length - 1) / ITEM_PER_PAGE);
      Array.from({ length: numOfPages }).forEach((_, index) => {
        const currentPage = index + 1;
        const start = index * ITEM_PER_PAGE + 1;
        createPage({
          path: currentPage === 1 ? slug : `${slug}/${currentPage}/`,
          component: resolve("./src/templates/Category.tsx"),
          context: {
            category_id: category._id,
            title: category.titolo,
            numOfPages,
            currentPage,
            start,
            ITEM_PER_PAGE,
            lastItemId: recipes[0]._id,
            articles: recipes.map((item) => item._id),
          },
        });
      });
    }
  });

  allRecipes.data.allSanityCategory.nodes.forEach((category) => {
    const categorySlug = createSlugFromTitle(category.titolo);
    category.ricettario
      .filter((el) => Boolean(el._id))
      .forEach((recipe) => {
        const recipeSlug = createSlugFromTitle(recipe.titolo);
        if (recipeSlug)
          createPage({
            path: `${categorySlug}/${recipeSlug}/`,
            component: resolve("./src/templates/Article.tsx"),
            context: {
              _id: recipe._id,
              title: recipe.titolo,
            },
          });
      });
  });
};

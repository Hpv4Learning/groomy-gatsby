export const categoryQuery = `{
  allSanityCategory {
    nodes {
      _id
      titolo
    }
  }
}`;

export type CategoryQueryProps = {
  data: {
    allSanityCategory: {
      nodes: {
        titolo: NonNullable<Queries.SanityCategory["titolo"]>;
        _id: NonNullable<Queries.SanityCategory["_id"]>;
      }[];
    };
  };
};

export const recipeQuery = `{
  allSanityCategory {
    nodes {
      titolo
      ricettario {
        _id
        titolo
      }
    }
  }
}`;

export type RecipeQueryProps = {
  data: {
    allSanityCategory: {
      nodes: {
        titolo: NonNullable<Queries.SanityCategory["titolo"]>;
        ricettario: {
          titolo: NonNullable<Queries.SanityRecipe["titolo"]>;
          _id: NonNullable<Queries.SanityRecipe["_id"]>;
        }[];
      }[];
    };
  };
};

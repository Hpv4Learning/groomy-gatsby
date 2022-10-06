export const categoryQuery = `{
  allSanityCategory {
    nodes {
      _id
      titolo
      ricettario {
        _id
        _createdAt
      }
    }
  }
}`;

export type CategoryQueryProps = {
  data: {
    allSanityCategory: {
      nodes: {
        titolo: NonNullable<Queries.SanityCategory["titolo"]>;
        _id: NonNullable<Queries.SanityCategory["_id"]>;
        ricettario: {
          _id: NonNullable<Queries.SanityRecipe["_id"]>;
          _createdAt: NonNullable<Queries.SanityRecipe["_createdAt"]>;
        }[];
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

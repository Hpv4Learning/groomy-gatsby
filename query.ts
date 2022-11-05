export const categoryQuery = `
{
    allSanityCategory {
    nodes {
      _id
      titolo
       ricettario {
        _createdAt
        _id
      }
    }
  }
}
`;

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

export const allRecipeQuery = `
{
  allSanityRecipe {
    nodes {
      id
      titolo
      category {
        titolo
      }
    }
  }
}
`;

export type AllRecipeQueryProps = {
  data: {
    allSanityRecipe: {
      nodes: {
        titolo: NonNullable<Queries.SanityRecipe["titolo"]>;
        id: NonNullable<Queries.SanityRecipe["id"]>;
        category: {
          titolo: NonNullable<Queries.SanityRecipe["category"]>["titolo"];
        };
      }[];
    };
  };
};

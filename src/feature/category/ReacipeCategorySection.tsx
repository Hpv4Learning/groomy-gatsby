import { Link } from "gatsby";
import React from "react";
import { Container, Recipe } from "../../components";
import { createSlugFromTitle } from "../../utils";
import { useCategoryContext } from "./context";

type Props = {
  ricette: Queries.CategoryPageQuery["allSanityRecipe"]["nodes"];
};

const RecipeCategorySection = ({ ricette }: Props) => {
  const { slug } = useCategoryContext();
  return (
    <Container>
      <div className='flex justify-content-between flex-wrap'>
        {ricette.map((ricetta) => (
          <Link
            key={ricetta.titolo}
            to={`/${slug}/${createSlugFromTitle(ricetta.titolo)}/`}
          >
            <Recipe
              style={{
                height: "100%",
              }}
              title={ricetta.titolo}
              description={ricetta.riassunto}
              image={ricetta.image?.asset}
              chef={ricetta?.cokkedby?.complete_name}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default RecipeCategorySection;

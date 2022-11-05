import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import { Container, SubTitle } from "../../components";
import { Review } from "./Review";

export const ReviewSection = () => {
  const data: Queries.ChefsQuery = useStaticQuery(query);
  return (
    <>
      <div className='spacer-xxxl'>
        <Container>
          <SubTitle as='h2' textAlign='center' weight='semibold'>
            I Nostri Chef
          </SubTitle>
          <div className='flex aling-items-center justify-content-between flex-wrap spacer-xl'>
            {data.allSanityChef.nodes.map((chef) => {
              const image = chef.image?.asset
                ? getImage(chef.image?.asset)
                : undefined;
              return (
                <Review
                  key={chef.complete_name}
                  name={chef.complete_name}
                  image={image}
                />
              );
            })}
          </div>
        </Container>
      </div>
      <div className='spacer-xxxl'></div>
    </>
  );
};

const query = graphql`
  query Chefs {
    allSanityChef {
      nodes {
        complete_name
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

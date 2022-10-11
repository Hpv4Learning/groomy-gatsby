import { Link } from "gatsby";
import React from "react";
import { Button, Container } from "../../components";
import { useCategoryContext } from "./context";

const Paginator = () => {
  const { slug, currentPage, numOfPages } = useCategoryContext();
  const hasNextPage = currentPage < numOfPages;

  console.log(slug);
  if (numOfPages > 1)
    return (
      <Container>
        <div
          className='flex align-items-center'
          style={{
            justifyContent:
              currentPage > 1 && hasNextPage
                ? "space-between"
                : currentPage === 1 && hasNextPage
                ? "flex-end"
                : "flex-start",
          }}
        >
          <Link
            to={currentPage <= 2 ? `/${slug}/` : `/${slug}/${currentPage - 1}/`}
          >
            {currentPage > 1 ? <Button size='xl'>Prev Page</Button> : null}
          </Link>
          <Link to={`/${slug}/${currentPage + 1}/`}>
            {hasNextPage ? <Button size='xl'>Next Page</Button> : null}
          </Link>
        </div>
      </Container>
    );
  return null;
};

export default Paginator;

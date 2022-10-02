import * as React from "react";
import { HeadFC, navigate } from "gatsby";

const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/");
  }, []);
  return <></>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

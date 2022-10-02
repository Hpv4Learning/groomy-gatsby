import styled from "styled-components";

export const Container = styled.div<{ size?: "fullwidth" | "aligner" }>(
  ({ size }) => ({
    maxWidth: size === "aligner" ? "1440px" : "unset",
    width: size === "aligner" ? "calc( 100% - 24px )" : "100%",
    marginLeft: "auto",
    marginRight: "auto",
  }),
);

Container.defaultProps = {
  size: "aligner",
};

import styled from "styled-components";

export const Container = styled.div<{ size?: "fullwidth" | "aligner" }>(
  ({ size }) => ({
    maxWidth: size === "aligner" ? "1728px" : "unset",
    width: size === "aligner" ? "calc( 100% - 288px )" : "100%",
    marginLeft: "auto",
    marginRight: "auto",
  }),
);

Container.defaultProps = {
  size: "aligner",
};

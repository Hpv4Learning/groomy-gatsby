import styled from "styled-components";
import { ThemeType } from "../styles/theme";

export const RoundedImageContainer = styled<any>("div")(function ({
  theme,
}: {
  theme: ThemeType;
}) {
  return {
    borderRadius: "50%",
    maxWidth: "657px",
    width: "100%",
    height: "657px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    tranform: "translateZ(0%)",
    background: theme.colors.yellow[500],
    ".wrapper": {
      maxWidth: "467px",
      maxHeight: "467px",
      width: "100%",
    },
  };
});

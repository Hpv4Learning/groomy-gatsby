import styled from "styled-components";
import { ThemeType } from "../styles/theme";

type TypographyProps = {
  color?: string;
  textAling?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  weight?: keyof ThemeType["fontWeight"];
};

export const Typography = styled.div<TypographyProps>(
  ({ theme }: { theme: ThemeType }) =>
    ({ weight, textAling, color }) => ({
      fontSize: "24px",
      fontWeight: weight ? theme.fontWeight[weight] : 400,
      color: color ? color : "inherit",
      textAlign: textAling ? textAling : "inherit",
    }),
);

export const Label = styled(Typography)({
  fontSize: "12px",
  lineHeight: "14px",
});

export const Paragraph = styled(Typography)({
  fontSize: "16px",
  color: "inherit",
  lineHeight: "20px",
});

export const Heading = styled(Typography)({
  fontSize: "24px",
  color: "inherit",
  lineHeight: "29px",
});

export const Subtitle = styled(Typography)({
  fontSize: "34px",
  color: "inherit",
  lineHeight: "39px",
});

export const Display = styled(Typography)({
  fontSize: "56px",
  color: "inherit",
  lineHeight: "64px",
});

import { useWrapWithProvider } from "./useWrapWithProvider";
import { GatsbyBrowser } from "gatsby";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] =
  useWrapWithProvider;

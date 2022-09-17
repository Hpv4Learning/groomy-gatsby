import "./src/styles/font.css";
import "./src/styles/global.css";
import { useWrapWithProvider } from "./useWrapWithProvider";
import { GatsbySSR } from "gatsby";
import { serveStaticFont } from "./serveStaticFont";

export const wrapRootElement: GatsbySSR["wrapRootElement"] =
  useWrapWithProvider;

export const onRenderBody: GatsbySSR["onRenderBody"] = serveStaticFont;

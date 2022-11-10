import { GlobalSeoProps, WebPageType } from "../types";
import { useSiteMetadata } from "./useSiteMetadata";
import { useLocation } from "@reach/router";
import React from "react";
import { useOrganizationSchema } from "./useOrganizationSchema";

type Props = {
  type?: WebPageType;
} & GlobalSeoProps;

export const useWebPageSchema = () => {
  return null;
};

export default useWebPageSchema;

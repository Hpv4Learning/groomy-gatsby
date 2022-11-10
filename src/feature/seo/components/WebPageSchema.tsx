import React from "react";
import { useBreadcrumbSchema } from "../hooks/useBreadcrumbSchema";
import useWebPageSchema from "../hooks/useWebPageSchema";
import { Breadcrumb, GlobalSeoProps, WebPageType } from "../types";

type Props = {
  type?: WebPageType;
  breadcrumbs: Breadcrumb[];
} & GlobalSeoProps;

export const WebPageSchema = ({}: Props) => {
  return null;
};

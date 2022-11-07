export type DefaultMetaProps = Partial<{
  metaTitle: string | null;
  metaDescription: string | null;
  externalImage: string | null;
  image: string | null;
  imageWidth: number;
  imageHeight: number;
  disableSlogan?: true;
}>;

export type WebPageType = "AboutPage" | "ContactPage" | "ProductPage";

export type GlobalSeoProps = DefaultMetaProps & {
  imageAltText?: string | undefined;
  publishDate?: string | undefined;
  modifiedDate?: string | undefined;
  type?: WebPageType;
};

export type Breadcrumb = {
  text: string;
  link: string;
};

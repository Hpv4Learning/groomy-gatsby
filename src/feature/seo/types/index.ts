export type DefaultMetaProps = Partial<{
  metaTitle: string | null;
  metaDescription: string | null;
  externalImage: string | null;
  image: string | null;
  imageWidth: number;
  imageHeight: number;
  disableSlogan?: true;
}>;

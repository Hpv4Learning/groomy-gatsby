import React from "react";
import { useSiteMetadata } from "../hooks";
import { DefaultMetaProps } from "../types";

export const MetaDecorator = ({
  metaTitle,
  metaDescription,
  image,
  externalImage,
  imageHeight,
  imageWidth,
  disableSlogan,
}: DefaultMetaProps) => {
  const {
    title,
    description,
    siteUrl,
    image: fallbackImage,
    author,
  } = useSiteMetadata() || {};

  const seoImage = React.useMemo(() => {
    if (externalImage) return externalImage;
    if (!image) return `${siteUrl}${fallbackImage}`;
    return `${siteUrl}${image}`;
  }, [siteUrl, fallbackImage]);

  const seoProps = React.useMemo(
    () => ({
      title: metaTitle || title,
      description: metaDescription || description,
      image: seoImage,
      imageHeight: imageHeight?.toString() || "512",
      imageWidth: imageWidth?.toString() || "512",
    }),
    [seoImage, title, description],
  );
  return (
    <>
      <title>
        {disableSlogan ? seoProps.title : `${seoProps.title} || Groomy`}
      </title>
      <meta httpEquiv='content-language' content={`it`} />
      <meta name='description' content={seoProps.description as string} />
      <meta property='og:title' content={seoProps.title as string} />
      <meta
        property='og:description'
        content={seoProps.description as string}
      />
      <meta property='og:type' content='website' />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:creator' content={author as string} />
      <meta property='twitter:title' content={seoProps.title as string} />
      <meta
        property='twitter:description'
        content={seoProps.description as string}
      />
      <meta property='og:image' content={seoProps.image as string} />
      <meta property='og:image:width' content={seoProps.imageWidth as string} />
      <meta
        property='og:image:height'
        content={seoProps.imageHeight as string}
      />
      <meta property='twitter:card' content={seoProps.image as string} />
    </>
  );
};

/*  */

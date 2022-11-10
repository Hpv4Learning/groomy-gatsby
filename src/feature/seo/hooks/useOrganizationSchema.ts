import React from "react";
import { useSiteMetadata } from "./useSiteMetadata";

export const useOrganizationSchema = () => {
  // const organizationSchema = React.useMemo(() => {
  //   return {
  //     "@type": "Organization",
  //     "@id": siteUrl + "#organization",
  //     "name": title,
  //     "url": siteUrl,
  //     //   "sameAs": [youtube],
  //     "logo": {
  //       "@type": "ImageObject",
  //       "@id": siteUrl + "#logo",
  //       "url": `${siteUrl}/${image}`,
  //       "width": 512,
  //       "height": 512,
  //       "caption": title,
  //     },
  //     "image": {
  //       "@id": siteUrl + "#logo",
  //     },
  //     "address": {
  //       "@type": "PostalAddress",
  //       "streetAddress": "Via Belin 13",
  //       "addressLocality": "Genova",
  //       "addressRegion": "Italy",
  //       "postalCode": "10164",
  //       "addressCountry": "IT",
  //     },
  //     "contactPoint": [
  //       {
  //         "@type": "ContactPoint",
  //         "contactType": "Servizio Clienti",
  //         "email": "groomy.business@gmail.com",
  //         "contactOption": "TollFree",
  //         "availableLanguage": [
  //           {
  //             "@type": "Language",
  //             "name": "Italian",
  //             "alternateName": "it",
  //           },
  //         ],
  //       },
  //     ],
  //   };
  // }, [siteUrl]);
  // return organizationSchema;
};

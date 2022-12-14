import { GatsbySSR } from "gatsby";
import React from "react";

export const serveStaticFont: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-Black.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-BlackItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-Bold.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-BoldItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-ExtraBold.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-ExtraBoldItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-ExtraLight.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-ExtraLightItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-Light.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-Italic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,

    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-Medium.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-LightItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,

    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-Regular.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-MediumItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-SemiBold.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-SemiBoldItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-Thin.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins'
      rel='preload'
      href='/fonts/Poppins-ThinItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
  ]);
};

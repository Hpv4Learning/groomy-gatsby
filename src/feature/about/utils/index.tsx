import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaStarHalf } from "@react-icons/all-files/fa/FaStarHalf";
import React from "react";

export const starCreator = () => {
  const stars = Math.ceil(Math.random() * 5);
  return Array.from({ length: stars }, (_, index) => {
    const half = index + 0.5;
    if (index + 1 <= stars)
      return (
        <FaStar
          style={{
            fill: "var(--purple-400)",
          }}
        />
      );
    if (half <= stars) return <FaStarHalf fill='var(--purple-400)' />;
  }).filter((x) => Boolean(x));
};

import { createContext, useContext } from "react";

const initialValue = {
  numOfPages: 0,
  currentPage: 0,
  slug: "",
};

type CategoryProvider = {
  numOfPages: number;
  currentPage: number;
  slug: string;
};

const CategoryContext = createContext<CategoryProvider>(initialValue);

export const CategoryProvider = CategoryContext.Provider;

export const useCategoryContext = () => useContext(CategoryContext);

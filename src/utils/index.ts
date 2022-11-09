export const createSlugFromTitle = (value: string | null) => {
  if (!value) return;
  return value.split(" ").join("-").toLowerCase();
};

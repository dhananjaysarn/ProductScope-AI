import api from "./api";

export const analyzeProduct =
async (
  product: string,
  category: string
) => {

  const response =
    await api.post(
      "/analyze",
      {
        product,
        category,
      }
    );

  return response.data;
};
export const getHistory = async () => {
  const response = await fetch("/api/history");
  return response.json();
};
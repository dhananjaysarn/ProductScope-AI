import api from "./api";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {

  const response =
    await api.post(
      "/auth/register",
      {
        name,
        email,
        password,
      }
    );

  return response.data;
};

export const loginUser = async (
  email: string,
  password: string
) => {

  const response =
    await api.post(
      "/auth/login",
      {
        email,
        password,
      }
    );

  if (response.data.token) {

      localStorage.setItem(
        "token",
        response.data.token
      );

  }

  return response.data;
};

export const logoutUser = () => {

  localStorage.removeItem(
    "token"
  );

};

export const getCurrentUser =
async () => {

  const response =
    await api.get("/auth/me");

  return response.data;
};

import { useJwt } from "react-jwt";
import API from "../_api";

export const login = async ({ email, password }) => {
  try {
    const response = await API.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logout = async ({ token, userInfo }) => {
  try {
    const { data } = await API.post(
      "/logout",
      { token, userInfo },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");

    return data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const useDecodeToken = (token) => {
  const { decodedToken, isExpired } = useJwt(token);

  try {
    if (isExpired) {
      return {
        success: false,
        message: "Token expired",
        data: null,
      };
    }

    return {
      success: true,
      message: "Token valid",
      data: decodedToken,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};

export async function Login(email, password) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role); 
  }

  return data;
}
import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";


export default function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/token/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      setMessage("Login Successful");
      navigate("/profile");
    } catch (error) {
      setMessage("Invalid Username or Password");
      console.error(error);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    message,
    handleClick,
  };
}
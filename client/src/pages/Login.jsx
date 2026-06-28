import { useState } from "react";
import api from "../api/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>

      <form onSubmit={login}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
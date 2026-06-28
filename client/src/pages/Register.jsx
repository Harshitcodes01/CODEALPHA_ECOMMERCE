import { useState } from "react";
import api from "../api/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/auth/register",
        form
      );

      alert(res.data.message);

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <h1>Register</h1>

      <form onSubmit={register}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import { toast } from "react-toastify";
import Button from "../components/UI/Button/Button";

function Register() {
  const navigate = useNavigate();
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
    if (!form.name || !form.email || !form.password) {
      toast.warn("Please complete all details.");
      return;
    }

    try {
      const res = await api.post(
        "/auth/register",
        form
      );

      toast.success(res.data.message || "Account created successfully! Please sign in. ✨");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="auth-page">
      {/* Decorative ambient background glows */}
      <div className="auth-bg-blob auth-bg-blob-1"></div>
      <div className="auth-bg-blob auth-bg-blob-2"></div>

      <div className="auth-card">
        <div className="auth-logo-wrapper">
          <svg className="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="var(--accent)" strokeWidth="1.5"/>
            <path d="M15 27V13L25 27V13" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1>Create Account</h1>
        <form onSubmit={register}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={form.name}
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={form.email}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
          />

          <Button type="submit" variant="primary">
            Register
          </Button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
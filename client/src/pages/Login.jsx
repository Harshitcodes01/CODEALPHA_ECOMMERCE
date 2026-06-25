import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] =
    useState("");

  const { login } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email);
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
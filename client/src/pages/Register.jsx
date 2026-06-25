function Register() {
  return (
    <div className="auth-page">
      <h1>Register</h1>

      <input
        placeholder="Name"
      />

      <input
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button>
        Register
      </button>
    </div>
  );
}

export default Register;
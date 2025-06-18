import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = ({ logo, primaryColor }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = login(email, password);
    if (!response.success) {
      setError(response.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email / Username"
            className="w-full p-3 border rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full p-3 text-white rounded"
            style={{ backgroundColor: primaryColor }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

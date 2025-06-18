import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const AuthForm = ({ logo, primaryColor, buttonColor, companyName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    console.log("Form Submitted", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-24 h-24" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: primaryColor }}>
          {companyName}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <Input
              id="email"
              type="text"
              placeholder="Email / Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="mb-6">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              icon={<i className="fas fa-eye" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign In Button */}
          <Button
            text="Sign In"
            color={buttonColor}
            className="w-full py-3 rounded-lg"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
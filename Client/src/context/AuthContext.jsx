import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const login = (email, password) => {
    // Placeholder for authentication API call
    if (email === "test@example.com" && password === "password") {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("authUser", JSON.stringify(userData));
      return { success: true };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setloading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ token, loading, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };

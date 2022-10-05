import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({ name: "Craig", email: "test@test.com" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p>
    </>
  );
}

import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User2() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({ name: "Craig", email: "test@test.com" });
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <p>User name is {user.name}</p>
      <p>User email is {user.email}</p>
    </>
  );
}

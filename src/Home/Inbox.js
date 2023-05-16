import React from "react";
import { useAuth } from "../component/auth";

export const Inbox = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Welcome {auth.user}</h1>
    </div>
  );
};

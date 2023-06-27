'use client';

import { useContext } from "react";
import SignLinks from "./SignLinks";
import UserCard from "./UserCard";
import { AuthContext } from "@/contexts/AuthContext";

export default function UserActions() {
  const { user } = useContext(AuthContext);

  if (!user) return <SignLinks />;

  return <UserCard username={user.username} imageUrl={user.imageUrl} />;
}

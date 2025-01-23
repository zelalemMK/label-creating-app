"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <a href="/">Home</a>
      {session ? (
        <>
          <a href="/dashboard" style={{ marginLeft: "20px" }}>
            Dashboard
          </a>
          <button onClick={() => signOut()} style={{ marginLeft: "20px" }}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => signIn()} style={{ marginLeft: "20px" }}>
          Login
        </button>
      )}
    </nav>
  );
}

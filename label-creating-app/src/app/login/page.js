"use client";

import { useState } from "react";
import users from "./db";



export default function AuthButtons() {
  const [isLoggenIn, setIsLoggedIn] = useState(false);
  const signIn = () => {
  setIsLoggedIn(!isLoggenIn);
  console.log("Sign in");
};

const signOut = () => {
  // signOut();
  setIsLoggedIn(!isLoggenIn);
  console.log("Sign out");
}
  if (isLoggenIn) {
    return (
      <>
        <p>Signed in as</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}
